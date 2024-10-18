import { useEffect, useState } from 'react'
import './UserTickets.css'
import Ticket from '../Ticket/Ticket';

const UserTickets = ({ticket})=>{

    const [tickets,setTickests] = useState([]);

    useEffect(()=>{
        const fetchTickets = async()=>{
            try{
                const response = await fetch('http://localhost:3000/userTickets');
                const data = await response.json();
                setTickests(data)
            }catch(error){
                console.error('Error fetching Tickets:', error);
            }
        }
        fetchTickets();
    },[])


    return(
        <section id="Tickets-section">
            <h2>Your Tickets</h2>
            {
               tickets.map((T)=><Ticket i={T} key={T.id}/>)
            }
        </section>
    )
}
export default UserTickets