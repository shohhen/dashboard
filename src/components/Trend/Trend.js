import "./Trend.css"

export const Trend = () => {
   return (
      <div className="trend-wrapper">
         <div className="trend-left">
            <div className="left-text">
               <p className="left-text-txt">Today’s trends</p>
               <p className="left-text-desc">as of 25 May 2019, 09:41 PM</p>
            </div>
            <ul className="left-list">
               <li>
                  <p className="left-txt">Today</p>
               </li>
               <li>
                  <p className="left-txt">Yesterday</p>
               </li>
            </ul>
         </div>
         <div className="trend-right">
            <ul className="right-list">
               <li>
                  <p>Resolved</p>
                  <span>449</span>
               </li>
               <li>
                  <p>Received</p>
                  <span>426</span>
               </li>
               <li>
                  <p>Average first response time</p>
                  <span>33m</span>
               </li>
               <li>
                  <p>Average response time</p>
                  <span>3h 8m</span>
               </li>
               <li>
                  <p>Resolution within SLA</p>
                  <span>94%</span>
               </li>
            </ul>
         </div>
      </div>
   )
}