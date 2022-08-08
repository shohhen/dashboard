import "./Cards.css"

export const Cards = () => {
   return (
      <ul className="cards-list">
         <li>
            <p>Unresolved</p>
            <span>60</span>
         </li>
         <li>
            <p>Overdue</p>
            <span>16</span>
         </li>
         <li>
            <p>Open</p>
            <span>43</span>
         </li>
         <li>
            <p>On hold</p>
            <span>64</span>
         </li>
      </ul>
   )
}