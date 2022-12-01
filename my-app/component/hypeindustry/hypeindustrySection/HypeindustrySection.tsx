type HypeIndustrySectionType = {
src1:string,
para1:string,
src2:string,
para2:string,

}

function HypeIndustrySection(prop:HypeIndustrySectionType) {

    return (

        <div>

            <div className="hype-div1">

                <div className="image-div">
                    <img src={prop.src1} alt="" />
                </div>

                <div className="para-div">
                    <p>{prop.para1}</p>
                    </div>
            </div>

            <div className="hype-div2">
                <div className="image-div">
                    <img src={prop.src2}  alt="" />
                </div>
                <div className="para-div">
                    <p>{prop.para2}</p>

                </div>

            </div>













        </div>

    )
}
export default HypeIndustrySection;