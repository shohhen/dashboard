import "./Sitebar.css"
import Over from "../../assets/images/statistitics.svg"
import Tickets from "../../assets/images/tickets.svg"
import Lamp from "../../assets/images/lamp.svg"
import Man from "../../assets/images/man.svg"
import Agents from "../../assets/images/agents.svg"
import Articles from "../../assets/images/articles.svg"
import Settings from "../../assets/images/settings.svg"
import Sub from "../../assets/images/subscription.svg"
import { Link } from "react-router-dom"

export const Sitebar = () => {
   return (
      <div>
         <div className="logo-wrapper">
            <span className="logo" >D</span>
            <span className="logo-text" >Dashboard Kit</span>
         </div>
         <div className="sitebar-wrapper" >
            <ul className="list" >
               <li>
                  <img   src={Over} alt="..." width={16} height={15} />
                  <Link to="/" >Overview</Link>
               </li>
               <li>
                  <img   src={Tickets} alt="..." width={16} height={15} />
                  <Link to="/tickets" >Tickets</Link>
               </li>
               <li>
                  <img   src={Lamp} alt="..." width={16} height={15} />
                  <Link to="/" >Ideas</Link>
               </li>
               <li>
                  <img   src={Man} alt="..." width={16} height={15} />
                  <Link to="/" >Contacts</Link>
               </li>
               <li>
                  <img   src={Agents} alt="..." width={16} height={15} />
                  <Link to="/" >Agents</Link>
               </li>
               <li>
                  <img   src={Articles} alt="..." width={16} height={15} />
                  <Link to="/" >Articles</Link>
               </li>
            </ul>
            <ul className="list2">
               <li>
                  <img src={Settings} alt="..." width={16} height={15} />
                  <p>Settings</p>
               </li>
               <li>
                  <img src={Sub} alt="..." width={16} height={15} />
                  <p>Subscription</p>
               </li>
            </ul>
         </div>
      </div>
   )
}