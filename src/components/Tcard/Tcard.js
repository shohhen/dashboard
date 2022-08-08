import "./Tcard.css"
import Jay from "../../assets/images/jay.png"
import Dot from "../../assets/images/Vector.svg"

export const Tcard = ({link,name,time,btn}) => {
   return (
      <div className="tcard">
         <img className="tcard-user" src={Jay} alt="user" width={44} height={44} />
         <p className="user-link">{link}</p>
         <p className="user-name">{name}</p>
         <p className="time">{time}</p>
         <button className="tcard-btn">{btn}</button>
         <img className="tcard-dot" src={Dot} alt="..." width={4} height={16} />
      </div>
   )
}