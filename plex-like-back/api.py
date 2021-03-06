import email
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
from functools import wraps
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


    app.config['SECRET_KEY']='004h2af12h3a4e161a7dh2d65fdae25f'
    app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///Users.db'
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

    db = SQLAlchemy(app)

    class Users(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        public_id = db.Column(db.Integer)
        email = db.Column(db.String(50))
        password = db.Column(db.String(50))
        admin = db.Column(db.Boolean)

    class Books(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
        name = db.Column(db.String(50), unique=True, nullable=False)
        Author = db.Column(db.String(50), unique=True, nullable=False)
        Publisher = db.Column(db.String(50), nullable=False)
        book_prize = db.Column(db.Integer)

    db.create_all()

    def token_required(f):
        @wraps(f)
        def decorator(*args, **kwargs):

            token = None

            if 'x-access-tokens' in request.headers:
                token = request.headers['x-access-tokens']

            if not token:
                return jsonify({'message': 'a valid token is missing'})
            
            try:
                data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
                current_user = Users.query.filter_by(public_id=data['public_id']).first()
            except:
                return jsonify({'message': 'token is invalid'})

            return f(current_user, *args, **kwargs)
        return decorator


    @app.route('/register', methods=['POST'])
    def signup_user():  
        data = request.get_json()  

        hashed_password = generate_password_hash(data['password'], method='sha256')
        
        user = Users.query.filter_by(email=data['email']).first()
        
        if user == None :
            new_user = Users(public_id=str(uuid.uuid4()), email=data['email'], password=hashed_password, admin=False) 
            db.session.add(new_user)  
            db.session.commit()    
            return jsonify({'message': 'registeration successfully'}),200
        else:
            return jsonify({'message': 'user already exist'}),409


    @app.route('/login', methods=['POST'])  
    def login_user(): 
        auth = request.authorization   

        if not auth or not auth.username or not auth.password:  
            return {'message': 'could not verify'}, 401   

        
        user = Users.query.filter_by(email=auth.username).first()
        if user== None:
            return jsonify({'message': 'user does not exist'}),401    

    
        if check_password_hash(user.password, auth.password):
            token = jwt.encode({'public_id' : user.public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], "HS256")
            return jsonify({'token' : token}), 200
        else:
            return jsonify({'message': 'invalid password'}), 401
          




    @app.route('/users', methods=['GET'])
    def get_all_users():  
    
        users = Users.query.all() 
        result = []   
        for user in users:   
            user_data = {}   
            user_data['public_id'] = user.public_id  
            user_data['name'] = user.name 
            user_data['password'] = user.password
            user_data['admin'] = user.admin 
        
            result.append(user_data)   

        return jsonify({'users': result})

    @app.route('/book', methods=['POST'])
    @token_required
    def create_book(current_user):
    
        data = request.get_json() 

        new_books = Books(name=data['name'], Author=data['Author'], Publisher=data['Publisher'], book_prize=data['book_prize'], user_id=current_user.id)  
        db.session.add(new_books)   
        db.session.commit()   

        return jsonify({'message' : 'new books created'})


    @app.route('/books', methods=['GET'])
    @token_required
    def get_books(current_user):

        books = Books.query.filter_by(user_id=current_user.id).all()

        output = []
        for book in books:
            book_data = {}
            book_data['id'] = book.id
            book_data['name'] = book.name
            book_data['Author'] = book.Author
            book_data['Publisher'] = book.Publisher
            book_data['book_prize'] = book.book_prize
            output.append(book_data)

        return jsonify({'list_of_books' : output})

    @app.route('/books/<book_id>', methods=['DELETE'])
    @token_required
    def delete_book(current_user, book_id):  
        book = Books.query.filter_by(id=book_id, user_id=current_user.id).first()   
        if not book:   
            return jsonify({'message': 'book does not exist'})   

        db.session.delete(book)  
        db.session.commit()   

        return jsonify({'message': 'Book deleted'})


    if  __name__ == '__main__':  
        app.run(debug=True)

    return app

create_app()