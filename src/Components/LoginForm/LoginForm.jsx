import "./LoginForm.css"
import FormLogo from "../FormLogo/FormLogo";
import { NavLink } from "react-router-dom";

const LoginForm = ()=>{
    function loginValidation(){
        
    }
    
    return(
        <div className='display-center'>
       <form name="login-form" action="/userProfile" method="get" id="login-form" onSubmit={loginValidation()}>
            <FormLogo/>
            <div id="login-input">
                <input type="email" name="email" placeholder="name@example.com" required />
                <input type="password" name="password" placeholder="Password" required />
            </div>
            <div className="buttons">
                <input type="submit" value="Login" className="form-button"/>
                <NavLink to='/SignUp' className="form-button">Sign Up</NavLink>
            </div>
        </form>
        </div>
    );
};

export default LoginForm;