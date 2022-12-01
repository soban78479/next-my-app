
import NavBar from "../../component/footer/navBar/NavBar";

import HypeIndustry_Concept from "../../component/hypeindustry_concept/HypeIndustry_Concept";
import HypeIndustry_Concept_section2 from "../../component/hypeindustry_concept/HypeIndustry_Concept_Section2";
import HypeIndustry_Concept_Cards from "../../component/hypeIndustry_Concept_Cards/HypeIndustry_Concept_Cards";
import RealFooter from "../../component/realFooter/RealFooter";

function HypeIndustry_concept() {
  return (
    <div>  <div>      <NavBar></NavBar> </div>

      <div>
        <HypeIndustry_Concept src="/icons.png" heading="Why HypeIndustry and what is it exactly?" paragraph="Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc... Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin and keep the volume and recurrence active! The key to make your money fast."></HypeIndustry_Concept>

        <HypeIndustry_Concept_section2 src="/Vector (2).png" heading="20 years of relationships + experience" paragraph="The idea of building a B2B marketplace, came to us a few years ago. Experiencing the process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve encountered issues and restrictions , we also faced lots of question from sellers and buyers, shipping issues etc... But at the end of this journey, we are now providing answers and solutions that will help our network and partners!"></HypeIndustry_Concept_section2>

        <HypeIndustry_Concept src="/Group (1).png" heading="Always the same issue through the years " paragraph="Many years have past of doing this bulk /wholesale trading business...

             And it is always the same questions that came to us from our suppliers: “Hey can you move apparel? I have too much of this brand etc...”, or “Can you buy any accessories?”, “Can you move soccer shoes?”, “I received another shipment of this model ;can you buy more or help me move more now?” etc...

              Well the answer was: “We don’t have any clients for those items, or let me ask around”" ></HypeIndustry_Concept>


        <HypeIndustry_Concept_section2 src="/Frame 3033.png" heading="Utopia" paragraph="In a 
               utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, 
                in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth.
 
                Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace
                  where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel,
             accessories) without any boundaries or questions! So let's try and create that platform: so other
               store owners & resellers/wholesalers worldwide could profit from!"></HypeIndustry_Concept_section2>


        <HypeIndustry_Concept src="/Frame 1.png" heading="Reality" paragraph="Stores are 
             flooded with quantities of the same items, so what do they do? They flip 
             them on well known resell platform/marketplace; and we are all very familiar
              with these marketplaces... . How can you sell some Yeezys or Nike, when buyers/bidders 
              are offering a price of 20-35% under retail? Simple, if you are not the store yourself or 
              a person who bought them at roughly 35% to 40% off retail... then forget it! 
              
              So, as a store owner, we see 3 options :

             1. Sell all your sleeping inventory on certain platforms one by one etc. (and for sure , some 
                models will not even sell ...so it’s a loss).Shipping will take a while, and you are wasting time & labor...
              "></HypeIndustry_Concept>

        <HypeIndustry_Concept_section2 src="/Frame 2.png" paragraph="2. Wholesale them to some entity or reseller you
           trust.But again they might only want to buy the good and the average stuff, that they can flip.
           
           3. Last but not least : Sell them on a platform in bulk anonymously, with or without a discount ! 
           Allowing your Hyped or general merchandise release inventory to reach multiple stores/resellers in the 
           USA and worldwide . Forget the classic individual B2C (business to consumer) model and , aim at other
            stores/ wholesalers .The Hype around the footwear, Apparel,
            Accessory resell market is wide and active! There are many options out there that need to be exploited!"></HypeIndustry_Concept_section2>

      </div>
              <div className="concept_cards-group">
          <br /><br />
          <h1  style={{textAlign:'center' , paddingBottom:'50px'}}>The PROS of such platform</h1>
                       

      <HypeIndustry_Concept_Cards src="/Package (1).png" heading="SHIPPING" paragraph="Sellers (stores and resellers) do not
       need to worry about shipment.We use the main carrier with tracking all the time !"></HypeIndustry_Concept_Cards>
      
      <HypeIndustry_Concept_Cards src="/UserGear.png" heading="ANONYMITY" paragraph="By using this platform, nobody knows who
       the sellers are. Anonymity is respected!"></HypeIndustry_Concept_Cards>
      
      <HypeIndustry_Concept_Cards src="/ShieldCheck.png" heading="BRAND INTEGRITY" paragraph="Reputable brands dislike to
       see their product sell for significantly under retail and doing so, may cause stores to lose 
       their accounts."></HypeIndustry_Concept_Cards>
      
      <HypeIndustry_Concept_Cards src="/LinkBreak.png" heading="FREEDOM" paragraph="Freedom for Stores/Resellers
       to list in bulk any inventory they want at any time they want! Inventory should sell faster this
        way! Better than offering a 10%-35% off coupons on their website and selling them one item at a
         time... let’s move the inventory ASAP! Stores are not museums: Boxes, tape, rent,electricity
          bill, payroll: those have a cost!"></HypeIndustry_Concept_Cards>
      
      <HypeIndustry_Concept_Cards src="/UserGear.png" heading="”FLA$H FLIPPING”" paragraph="This option (for the top buyers only) allows you to re-flip a bundle or amount of items ( by adding a margin per pair) ,you just purchased , and flip it back on our platform for a limited time (1 hour window)! Creating a new avenue of profit for our clients! The profit/commission is paid right 
      away if the bundle sells !Making money on a click of a button .The new bulk traders have arrived !"></HypeIndustry_Concept_Cards>
</div>

<RealFooter></RealFooter>
    </div>
  )
}
export default HypeIndustry_concept;