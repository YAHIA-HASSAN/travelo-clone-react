import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../Components/UserInfo/UseInfo';
import UserTickets from '../Components/UserTickets/UserTickkets';

const UserProfile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/login'); 
        }
    }, [navigate]);

    return (
        <>
            <UserInfo />
            <UserTickets />
        </>
    );
};

export default UserProfile;
