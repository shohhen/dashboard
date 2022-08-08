import Search from "../../assets/images/search.svg"
import Not from "../../assets/images/notifications.svg"
import Jay from "../../assets/images/jay.png"
import "./Header.css"

export const Header = () => {
   return (
      <div className="header" >
         <p className="over" >Overview</p>
         <img className="search" src={Search} alt="search" width={15} height={15} />
         <img className="not" src={Not} alt="..." width={16} height={16} />
         <p className="user-name" >Jones Ferdinand</p>
         <img className="user" src={Jay} alt="jay" width={44} height={44} />
      </div>
   )
}