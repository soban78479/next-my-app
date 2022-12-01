type concept_card_type ={
    src :string;
     heading: string;
     paragraph:string
}



function HypeIndustry_Concept_Cards(prop:concept_card_type){
    return(
        <div className="conept-cards">
            <img src={prop.src} alt="box image" /> <br />
            <h1>{prop.heading}</h1>
            <p>{prop.paragraph}</p>
        </div>
    )
}
export default HypeIndustry_Concept_Cards;