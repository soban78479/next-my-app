
import Button from "../../Button/Button";
import HypeIndustrySection from "../hypeindustrySection/HypeindustrySection";

function BuyingHypeindustry (){
    return (
       <div  className="BuyingHypeindus">

      
        <h1 >Buying on Hypeindustry is simple!</h1>
        <HypeIndustrySection src1="1.png" para1="Create a buyer account / profile,
         with all required fields: Full name, Company name or Store Name, 
         Address, Credit Card info etc..."   src2="Group 2932.png" para2="You will then receive email alerts whenever any seller posts an offer on the platform. Then it is up to you to click on the link to view the offer or not. Of course, each email alert contains the offer details and models, 
         so you know what has been posted, and if it is in any 
         of your interest to purchase or not."></HypeIndustrySection> 
            
            <HypeIndustrySection src1="Group 2932 (1).png" src2="Group 2932 (2).png" para1="The o
            ffer can either be: an “open stock inventory”, meaning you can select any sizes
             you want from the seller stock with of course a minimum quantity imposed by the s
             eller (if he wants to), or a “buy all /take all offer”, which means that the selle
             r wants you to buy all the quantities in that specific model. Usually “buy all deal
             s” have a higher discounted purchase price. Keep in mind, once you place an order o
             n an open stock model, the stock is live and updated right away for the next buyer,
              which will reflect less quantities in the inventory...until it reaches a: “sold out” 
              status." para2="Once logged in, simply view the offer and click on any of the models 
              you wish to order by clicking on the “open stock / or buy all” buttons."></HypeIndustrySection>
          
            <HypeIndustrySection src1="Group 2932 (3).png" src2="Group 2932 (4).png" para1="Once the 
              seller approves the order, (this might take 10 min or up to to 3 days) your credit card
               will be charged, and you will receive an email with a tracking number. NO charges will be 
               done unless orders are APPROVED ! We created a dashboard for buyers so you can see all the
                information you need: invoice number, tracking number, carrier /shipper, pdf downloadable 
                invoices etc...Now, you have your own excel accounting sheet with you all the time." para2="Please 
                keep in mind: there are no refunds, no returns, no order cancellations, all sales are finals 
                unless the wrong items were shipped! This is a B2B Platform."></HypeIndustrySection>
            
            
                    <Button title="Learn More" ></Button>

       </div>
    )
}
export default BuyingHypeindustry;