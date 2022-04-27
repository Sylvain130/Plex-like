from base64 import b64encode
import base64
from flask import json
from flask import jsonify
import pytest
from api import create_app


@pytest.fixture()
def app():
    app = create_app()
    app.config.update({
        "TESTING": True,
    })

    # other setup can go here

    yield app

    # clean up / reset resources here


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def runner(app):
    return app.test_cli_runner()


def test_request_example(client):
    response = client.get("/")
    assert b'test' in response.data

def test_register(client):
    response = client.post("/register", data=json.dumps({"name":"Yasoob","password":"strongpassword"}),content_type='application/json',)
    assert response.status_code == 200
    assert response.data == b'{"message":"registeration successfully"}\n'



def test_login(client):
    response = client.post("/login", headers={"Authorization": "Basic {}".format(base64.b64encode(b'Yasoob:strongpassword').decode('utf-8'))})
    assert response.status_code == 200
    assert response.data[0:9] == b'{"token":'

