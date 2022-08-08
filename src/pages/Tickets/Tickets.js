import { Tcard } from "../../components"
import { TicketTit } from "../../components/TicketTit"
import { Tend } from "../../components"
import "./Tickets.css"

export const Tickets =() => {
   return (
      <div className="tik-wrapper">
         <TicketTit />
         <Tcard link="Contact Email not Linked" name="Tom Cruise" time="May 26, 2019" btn="High" />
         <Tcard link="Adding Images to Featured Posts" name="Matt Damon" time="May 26, 2019" btn="low" />
         <Tcard link="When will I be charged this month?" name="Robert Downey" time="May 26, 2019" btn="High" />
         <Tcard link="Payment not going through" name="Christian Bale" time="May 25, 2019" btn="Normal" />
         <Tcard link="Unable to add replies" name="Henry Cavil" time="May 25, 2019" btn="High" />
         <Tcard link="Downtime since last week" name="Chris Evans" time="May 25, 2019" btn="Normal" />
         <Tcard link="Referral Bonus" name="Sam Smith" time="May 25, 2019" btn="low" />
         <Tcard link="How do I change my password?" name="Steve Rogers" time="May 24, 2019" btn="Normal" />
         <Tend/>
      </div>
   )
}