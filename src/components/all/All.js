import { Cards } from "../Cards"
import { Trend } from "../Trend"
import { Unresolved } from "../Unresolved/Unresolved"


export const All = () =>{
   return (
      <div>
         <Cards/>
         <Trend/>
         <Unresolved/>
      </div>
   )
}