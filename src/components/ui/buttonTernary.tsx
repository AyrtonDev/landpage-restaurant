
import { ReactNode } from "react"
import { Button } from "./button"

type Props ={
    children:ReactNode
}


export default function buttonTernary({children}: Props){
    return(
        <div className="ternary-style">
        <Button className="border-r-2"variant={"primary"}>{children}</Button>
        
        
        
        </div>
    )
}