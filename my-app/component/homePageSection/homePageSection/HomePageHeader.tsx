import Button from "../../Button/Button";

type headerType = {
    src: string,
    heading: string,
    paragrapg: string

}

function HomePageHeader(prop: headerType) {

    return (
        <div className="header-container">

            <div className="header_text">
                <h1>{prop.heading}</h1>
                <p>
                    {prop.paragrapg} <br />
                    <Button title="read more"></Button>
                </p>
            </div>
            <div>
                <img className="header_image" src={prop.src} alt="" />
            </div>


        </div>

    )

}
export default HomePageHeader;