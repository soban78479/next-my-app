type HypeIndustry_conceptType = {
    src: string,
    heading?: string,
    paragraph: string
    
}

function HypeIndustry_Concept(prop: HypeIndustry_conceptType) {

    return (
        <div className="HypeIndustry_Concept_section">

            
            <div className="HypeIndustry_Concept_image" >
                <img src={prop.src} alt="" />
            </div>
            <div className="HypeIndustry_Concept_text">
                <h1>{prop.heading}</h1> 
                <p>
                    {prop.paragraph}
                

                </p>
            </div>

        </div>

    )

}
export default HypeIndustry_Concept;