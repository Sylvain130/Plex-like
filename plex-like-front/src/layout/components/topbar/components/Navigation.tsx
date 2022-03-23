import { NavLink} from "react-router-dom";

const Navigation = (): JSX.Element => {
    return(
        <div className="navigation">
            <NavLink className="navlink" to="/">
                Acceuil
            </NavLink>
            <NavLink className="navlink" to="/Films">
                Film
            </NavLink>
            <NavLink className="navlink" to="/Series">
                Series
            </NavLink>
            <NavLink className="navlink" to="/Fdp">
                Fdp
            </NavLink>
    
        </div>
    )
}

export default Navigation;