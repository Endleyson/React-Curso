import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
export default class Calculator extends Component{
    render(){
        return(
            <div className="calculator">
                <Button Label = "AC"></Button>
                <Button Label = "+/-"></Button>
                <Button Label = "%"></Button>
                <Button Label = "/"></Button>  
                <Button Label = "7"></Button>
                <Button Label = "8"></Button>
                <Button Label = "9"></Button>
                <Button Label = "*"></Button>
                <Button Label = "4"></Button>
                <Button Label = "5"></Button>
                <Button Label = "6"></Button>
                <Button Label = "-"></Button>
                <Button Label = "1"></Button>
                <Button Label = "2"></Button>
                <Button Label = "3"></Button>
                <Button Label = "+"></Button>
                <Button Label = "0"></Button>
                <Button Label = "."></Button>
                <Button Label = "="></Button>

            </div>
            
        )

    }
}