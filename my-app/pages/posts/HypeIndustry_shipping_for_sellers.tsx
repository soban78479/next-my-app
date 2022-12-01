import NavBar from "../../component/footer/navBar/NavBar";
import { AspectRatio } from '@chakra-ui/react'
import RealFooter from "../../component/realFooter/RealFooter";
function HypeIndustry_shipping_for_sellers() {

    return (
        <div>
            <NavBar></NavBar>

            <div className="ship-seller-div">


                <h1>How do I get my prepaid shipping LABELS?</h1>  <br /><br />
                <p>

                    Once you have approved the purchase, you can
                    request for your labels by email at shipping@hypeindustry.com  <br /><br />

                    <b> We take care of all customs paperwork for you , so you can sleep well at night!</b> <br /><br />

                    1.  Buyer’s details in full, name , full address and invoice number.
                    2.Box count and if possible boxes dimension.
                    3.Total pairs shipped, no need for weight.
                    4.Pick up requested yes or no , and address for pick up if needed

                    <br /><br />

                    Labels are then emailed to you within 24h/48h. You can drop the boxes at an authorized
                    shipper or request a pick-up. We can either schedule the pick-up for
                    you, during your opening hours, or,  you can request the pick-up yourself at your own discretion!
                </p>

                <br /><br />

                <h1>How do I pack the items I have SOLD?</h1>

                <br /><br />

                <p>
                    This process is very easy! We suggest using standard Nike or Adidas
                    boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 prs per box. If you unfold
                    boxes properly you may be able to fit an extra pair or two! Check out this video
                    we found (we are not in that video or know anyone in this video) it is a tutorial for
                    sellers who do not know how to flatten shoe boxes. With this method you can pack
                    14 to 15 pairs versus 12 pairs per box:
                </p>

                <br /><br />

                <AspectRatio  className="video"    maxW='460px' maxH='260' ratio={1}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                        allowFullScreen
                    />
                </AspectRatio>


<p>
Do not put more than 15 pairs of shoes per box and do not fold/flatten shoe boxes, 
that are not foldable! For example, certain pair of shoes like Jordan 
retro boxes do not fold and certain adidas consortium do not fold as well so please be very careful!
</p>
<div>
<RealFooter></RealFooter>
</div>

       </div>


        </div>
    )
}

export default HypeIndustry_shipping_for_sellers;
