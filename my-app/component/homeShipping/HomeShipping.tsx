type HomeShippingType ={
    heading: string,
    paragraph: string,
    className:string,
    src:string
}

function HomeShipping (prop:HomeShippingType){

    return (

     <div className={prop.className}>
        <img src={prop.src} alt="" />
<h1>{prop.heading}</h1>

 <p > {prop.paragraph}</p>
<br />
 <a href="">read more {">"} </a>
</div>
          
    )
}
export default HomeShipping;