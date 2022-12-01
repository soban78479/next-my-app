
import NavBar from "../../component/footer/navBar/NavBar";
import BuyingHypeindustry from '../../component/hypeindustry/buyingHypeindusrty/BuyingHypeindustry'
import SellQuestion from "../../component/sellQuestion/SellQuestion";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import RealFooter from "../../component/realFooter/RealFooter";
function  HypeIndustry_buying(){
    return(
        <div>
            <NavBar></NavBar>
        <div>            <BuyingHypeindustry></BuyingHypeindustry>
        </div>

           <div className="HypeIndustry_buying_questions">

            <Accordion defaultIndex={[0]} allowMultiple >
            <AccordionItem >
                <h2>
                    <AccordionButton >
                        <Box flex='1' textAlign='left' >
                      <b>  Can I order other items that are not offered on the platform? Do you offer pre-order?</b>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                NO not at all, only what is offered on the platform is available to purchase! We have new items on
                 a daily basis, so check back often!No pre order, this is a live offer with product in stock !!!!</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                      <b> Sizing</b> 
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
                      <b>  Shipment Damage  </b>
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
                      <b>  Minimum orders  </b>
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
                     <b>   Taxes and Duties </b>
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
         <div className="buying-footer">
            
       <RealFooter></RealFooter>
        </div>
        
        </div>
    )
}
export default HypeIndustry_buying;

