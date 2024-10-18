import { NavLink, useNavigate, useParams } from 'react-router-dom';
import './UserInfo.css';
import { useEffect, useState } from 'react';

const UserInfo = () => {
    const { email } = useParams();
    const [userName, setUserName] = useState(''); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/userData?email=${email}`);
                if (!response.ok) {
                    handleLogout();
                } else {
                    const data = await response.json();
                    if (data.length > 0) {
                        setUserName(data[0].fName);
                    } else {
                        handleLogout();
                    }
                }
            } catch (error) {
                console.error('Error fetching User Data:', error);
                handleLogout(); 
            }
        };

        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/Login'); 
        } else {
            fetchUserData();
        }

        return () => {
            
        };
    }, [email, navigate]); 

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); 
        navigate('/Login'); 
    };

    return (
        <div id='user-info-container'>
            <section id="user-info">
                <div id="user-info-div">
                    <img src="/user-img.png" alt="user image" />
                    <p>Hi, {userName }</p>
                </div>
                <div>
                    <NavLink to='/Login' className="red-button" onClick={handleLogout}>Log out</NavLink>
                </div>
            </section>
            <hr />
        </div>
    );
};

export default UserInfo;
