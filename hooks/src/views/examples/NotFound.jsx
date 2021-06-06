import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    <div className="Home">
        <PageTitle error
            title="ERROR 404"
            subtitle="Opss... Página Não Encontrada!" />
    </div>
)

export default Home