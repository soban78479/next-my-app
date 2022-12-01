import { constants } from "fs/promises"
import { title } from "process"
import { useState } from "react"
import Button1 from "../Button/Button"


function CardItem (){
    
    
    const [counterValue,setCountValue] = useState<number>(0)

      function increment(){
            setCountValue(counterValue+1)
      }
    
      function decrement(){
            setCountValue(counterValue-1)
      }
    
      return(
    <div> <Button1 title='+' onclickHandler={increment}></Button1>   <br />       
    {counterValue}
          <Button1  title="-" onclickHandler={decrement}></Button1>
          </div>
    )
  
  }

  export default CardItem