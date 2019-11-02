import React from 'react'; 
import Login from './login_comps/login'


const Header = () =>{
    return(
        <div className="Header">
            <header>
                <h1>Messager: On My Block!</h1>
                <Login className="Test"/>
            </header>
        </div>
    );
}

export default Header; 
