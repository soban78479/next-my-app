import NavBar from "../../component/footer/navBar/NavBar";
import RealFooter from "../../component/realFooter/RealFooter";
import SellingNavbar from "../../component/sellingNavbar/SellingNavbar";
import SellQuestion from "../../component/sellQuestion/SellQuestion";


function HypeIndustry_selling(){
    return(
        <div>
            <NavBar></NavBar>
           <div className="sell-page-section"> 
                       <SellingNavbar></SellingNavbar>
                       <SellQuestion></SellQuestion>
           </div>
           
        
    <RealFooter></RealFooter>
    </div>
    )
}
export default HypeIndustry_selling;