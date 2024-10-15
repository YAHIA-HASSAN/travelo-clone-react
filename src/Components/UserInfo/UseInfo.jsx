import { NavLink } from 'react-router-dom'
import './UserInfo.css'

const UserInfo = () => {
    
    function logout(){
        
    }


    return (
        <div id='user-info-container'>
            <section id="user-info">
                <div id="user-info-div">
                    <img src="./user-img.png" alt="user image" />
                    <p>Hi, <span id="user-name"></span></p>
                </div>
                <div>
                    <NavLink to='/Login' className="red-button" onClick={logout()}>Log out</NavLink>
                    
                </div>
            </section>
            <hr />
        </div>
    )
}

export default UserInfo