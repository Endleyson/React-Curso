import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num){
    const n =parseInt(num) // tratar o erro com valores nulos
    if(n < 0) return -1
    if(n == 0) return 1
    return calcFactorial(n-1)*n
}
const UseEffect = (props) => {
    //ex01
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    useEffect(function(){
        setFactorial(calcFactorial(number))
    },[number])
    useEffect(function(){
        if(factorial>1000000){
            document.title = 'Fatorial > 1M'
        }else if(factorial<0){
            document.title = 'Fatorial Negativo Não Existe'
        }else{
            document.title = 'React Hooks'
        }
    },[factorial])

    //ex02
    const [status, setStatus] = useState("impar")
    useEffect(function(){
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    })
    
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
             <SectionTitle title = "Exercicio #01"/>
             <div className="center">
                    <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? 'Não Existe!': factorial}</span>
                    </div>
                    <input type="number" className="input" 
                    value = {number}
                    onChange= {e=>setNumber(e.target.value)}/>
                </div>
                    
                
            <SectionTitle title = "Exercicio #02"/>
            <div className="center">
                    <span className="text">Você está calculando o fatorial de um numero:  </span>
                    <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
