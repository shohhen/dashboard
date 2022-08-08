import "./TicketTit.css"
import Sort from "../../assets/images/sort.svg"
import Filter from "../../assets/images/filter.svg"

export const TicketTit = () => {
   return (
      <>
      <ul className="tit-list">
         <li>
            <h3>All tickets</h3>
         </li>
         <li>
            <img src={Sort} alt=".." />
            <span className="tit-sort">Sort</span>
            <img src={Filter} alt=".." />
            <span>Filter</span>
         </li>
      </ul>
      <div className="tit-card">
         <p style={{width:"440px"}}>Ticket details</p>
         <p style={{width:"208px"}}>Customer name</p>
         <p style={{width:"140px"}}>Date</p>
         <p style={{width:"104px"}}>Priority</p>
      </div>
      </>
   )
}