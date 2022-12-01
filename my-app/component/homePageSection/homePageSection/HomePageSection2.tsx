import Button from "../../Button/Button";

type sectionType2 = {
    src: string,
    heading?: string,
    paragraph: string

}

function HomePageSection2(prop: sectionType2) {

    return (
        <div className="section-container2">

            
            <div className="section_image2" >
                <img src={prop.src} alt="" />
            </div>
            <div className="section_text2">
                <h1>{prop.heading}</h1> 
                <p>
                    {prop.paragraph}
                    <br /><br />
                    <a href="">read more {">"} </a>

                </p>
            </div>

        </div>

    )

}
export default HomePageSection2;