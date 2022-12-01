import HypeIndustry_concept from "../../../pages/posts/HypeIndustry_concept";
import Logo from "../logo/Logo";
import Link from "next/link"
function NavBar() {
  
    
    return (
        <div>

            <Logo></Logo>

            <div className="navbar">
                
                
                <div className="dropdown">
                    <button className="dropbtn">Hypeindustry
                    
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    
                    <Link href='/posts/HypeIndustry_concept'>HypeIndustry_concept</Link>   
                    <Link href='/posts/HypeIndustry_buying'>HypeIndustry_buying</Link>   
                    <Link href='/posts/HypeIndustry_selling'>HypeIndustry_selling</Link>   
                    </div>

                </div>
                <div className="dropdown">
                    <button className="dropbtn">Hype Offers
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Shipping
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <Link href='/posts/HypeIndustry_shipping_for_buyers'>HypeIndustry_shipping_for_buyers</Link>   
                    <Link href='/posts/HypeIndustry_shipping_for_sellers'> HypeIndustry_shipping_for_sellers</Link>   
                        <a href="#">Link 3</a>
                    </div>
                   
                </div>
                <a href="#home">Seller Request Form</a>

                <div className="search">
                <a href="">Login</a>
                <input type="text" placeholder="brands, Models..." width={20} />
            </div>


            </div>

        

        </div>
    )

}

export default NavBar;