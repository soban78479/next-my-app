import NavBar from "../../component/footer/navBar/NavBar";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import RealFooter from "../../component/realFooter/RealFooter";



function HypeIndustry_shipping_for_buyers() {
    return (
        <div>
            <NavBar></NavBar>

            <div className="ship-buyer">

                <div className="ship-buyer-sec1-div1">
                    <h1>Shipping for buyers</h1>
                    <p>All of our items are being shipped from several warehouses/stores in the USA
                        and worldwide, and usually ships within 24h to 5 business days depending on the
                        seller’s shipping time.
                        <br /><br />
                        <b>We take care of all customs paperwork for you , so you can sleep well at night!</b>

                        <br /><br />
                        1. <b> Sellers: </b>Just pack the shoes, tape the box(es)properly with lots of tape,
                        request your labels via email, and relax! The rest will be taken care of ☺

                        <br /><br />

                        2. <b> Buyers: </b> Don’t worry, we will make sure: a proper value, tariff code and description are entered and that
                        no problems occur from the time packages leave the country and arrive in your country to clear customs!
                    </p>
                </div>
                <div className="ship-buyer-sec1-div2">
                    <img src="/Group 5030.png" alt="here is image" />

                </div>

                <div className="ship-buyer-sec-div">

                    <h1>How much does shipping COST</h1>
                    <p>

                        The default shipping cost for sellers & buyers on the platform is $2.50/pair
                        for domestic shipments within the USA, and $10-$12.50/pair for international express shipments.
                        That will vary based on the seller & buyer location. Of course, shipping
                        cost are pretty low, as we are dealing with bulk purchases, resulting in cost-effective shipping.
                    </p>


                </div>
            </div>

            <div className="ship-buyer-ques">
                <Accordion defaultIndex={[0]} allowMultiple >
                    <AccordionItem >
                        <h2>
                            <AccordionButton >
                                <Box flex='1' textAlign='left' >
                                    <b>  Can I change my shipping address once my order has been placed?</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} >
                            Hypeindustry is unable to change a shipping address once the order has been placed. So please make sure all personal and corporate information
                            are correct on your user profile.Also the shipping address on file has to match your billing address! </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <b> Why does my billing and shipping address have to MATCH?</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <b>Can I edit my order once I placed It? </b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <b>  Can I change the Shipping Address AFTER the order has been placed?</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <b>   Can I create several Seller Accounts?  </b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <b>How long does it take to ship?</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
             <div>

            <RealFooter></RealFooter>
            </div>
        </div>
    )
}
export default HypeIndustry_shipping_for_buyers;