import "./Tend.css"
import Left from "../../assets/images/left.svg"
import Right from "../../assets/images/right.svg"

export const Tend = () => {
   return (
      <div className="tend">
         <p className="tend-t">Rows per page:</p>
         <span>8</span>
         <p className="tend-txt">1-8 of 1240</p>
         <img src={Left} alt=">" width={6} height={12} />
         <img src={Right} alt="<" width={6} height={12} />
      </div>
   )
}