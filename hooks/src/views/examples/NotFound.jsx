import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import Logo from '../../image/404error.png'
const Home = props => (
    <div className="Home">
        <PageTitle error
            title="ERROR 404"
            subtitle="Opss... Página Não Encontrada!" />
            <img src={Logo} alt="logo"/>
   
    </div>
)

export default Home