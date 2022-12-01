import Button from "../../Button/Button";

type sectionType = {
    src: string,
    heading?: string,
    paragrapg: string

}

function HomePageSection(prop: sectionType) {

    return (
        <div className="section-container">
         
            <div className="section_text">
                <h1>{prop.heading}</h1>
               
                <p>
                    {prop.paragrapg}

                </p>
            </div>
            <div className="section_image" >
                <img src={prop.src} alt="" />
            </div>


        </div>

    )

}
export default HomePageSection;