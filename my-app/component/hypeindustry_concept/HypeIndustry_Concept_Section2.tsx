type HypeIndustry_Concept_section2_Type = {
    src: string,
    heading?: string,
    paragraph: string

}

function HypeIndustry_Concept_section2(prop: HypeIndustry_Concept_section2_Type) {

    return (
        <div className="HypeIndustry_Concept_section2">

            
            <div className="HypeIndustry_Concept_image2" >
                <img src={prop.src} alt="" />
            </div>
            <div className="HypeIndustry_Concept_text2">
                <h1>{prop.heading}</h1> 
                <p>
                    {prop.paragraph}
                

                </p>
            </div>

        </div>

    )

}
export default HypeIndustry_Concept_section2;