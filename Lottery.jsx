import { useState } from "react"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3 , winSum=15}) {
let [tickets, setTickets] = useState(genTicket(n));

let isWin = sum(tickets) === winSum;

let newTicket = () => {
    setTickets(genTicket(n));
}
    return (
        <div>
            <h2>Lottery</h2> 
            <Ticket ticket={tickets}/>
            <br/>
            <button onClick={newTicket}>New Ticket</button>
            <h3>{isWin ? "Hurraaaayyyyy You Win!" : "You Lose!"}</h3>
        </div>
    );
}
