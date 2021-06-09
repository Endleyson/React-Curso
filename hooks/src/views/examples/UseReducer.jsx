import React,{useReducer}from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store'
import {number_add2, number_add11, number_sub9, login} from '../../store/actions'
const UseReducer = (props) => {
    const [state, dispatch] =useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                <span className="text">{state.user.name }</span> :
                <span className="text">Sem Usuário</span>}
                <span className="text">{state.number}</span>
            </div>
            <div className="center">
            <div> 
                <button className="btn"
                onClick = {()=> login(dispatch, 'Endleyson') }>Login</button>
                <button className="btn"
                onClick = {()=> number_add2(dispatch) }>+2</button>
                <button className="btn"
                onClick = {()=> dispatch({type:'number_mult7' }) }>*7</button>
                <button className="btn"
                onClick = {()=> dispatch({type:'number_div25' }) }>/25</button>
                <button className="btn"
                onClick = {()=> dispatch({type:'number_int' }) }>int</button>
                <button className="btn"
                onClick = {()=> dispatch({type:'number_add11' }) }>+11</button>
                <button className="btn"
                onClick = {()=> dispatch({type:'number_sub9' }) }>-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
