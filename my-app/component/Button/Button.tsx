import { Button, ButtonGroup } from '@chakra-ui/react'

// import styles from '../../../my-app/styles/Button/Button.css'

type buttonType = {

title?:string,



}



function Button1 (prop:buttonType){
  return(
  <div> <Button colorScheme='blue' className='Button1'  >{prop.title}</Button></div>
  )

}

export default Button1