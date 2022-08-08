import "./Unresolved.css"

export const Unresolved = () => {
   return(
      <div style={{display:"flex"}}>
         <div className="unres">
         <span className="unres-title">Unresolved tickets</span>
         <span className="unres-all">View details</span>
         <p className="unres-group">Group: <span className="unres-span">Support</span></p>
         <ul className="unres-list">
            <li>
               <p>Waiting on Feature Request</p>
               <span>4238</span>
            </li>
            <li>
               <p>Awaiting Customer Response</p>
               <span>1005</span>
            </li>
            <li>
               <p>Awaiting Developer Fix</p>
               <span>914</span>
            </li>
            <li>
               <p>Pending</p>
               <span>281</span>
            </li>
         </ul>
      </div>
      <div>
      <div className="task">
         <span className="task-title">Tasks</span>
         <span className="task-all">View all</span>
         <p className="task-group">Today</p>
         <ul className="task-list">
            <li>
               <p className="task-tit">Create new task</p>
               <button className="btn">+</button>
            </li>
            <li>
               <div style={{display:"flex"}}>
                  <input type="radio" name="radio" />
                  <p>Finish ticket update</p>
               </div>
               <button className="btn-yellow">URGENT</button>
            </li>
            <li>
               <div style={{display:"flex"}}>
                  <input type="radio" name="radio" />
                  <p>Create new ticket example</p>
               </div>
               <button className="btn-green">NEW</button>
            </li>
            <li>
               <div style={{display:"flex"}}>
                  <input type="radio" name="radio" />
                  <p>Update ticket report</p>
               </div>
               <button className="btn">DEFAULT</button>
            </li>
         </ul>
      </div>
      </div>
      </div>
   )
}