import { useState } from 'react'
import './UserTickets.css'
import Ticket from '../Ticket/Ticket';

const UserTickets = ()=>{
    const [tickets,setTickets]= useState([{
        "PassangerName":"Mr. Yahia Hassan",
        "TicketClass":"Business Class",
        "From":"Cairo",
        "To":"Paris",
        "Time":"15/10/2024 15:30PM",
        "GateNo":4,
        "Barcode":"https://www.freepnglogos.com/uploads/barcode-png/barcode-laser-code-vector-graphic-pixabay-3.png"
    }]);

    return(
        <section id="Tickets-section">
            <h2>Your Tickets</h2>
            {
               tickets.map((T)=><Ticket i={T}/>)
            }
        </section>
    )
}
export default UserTickets