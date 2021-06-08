import React from 'react'

export const data ={
    number: 123,
    text: 'Context API',
    bio: 'Utilizando useContex para buscar a informção'
}
const DataContext = React.createContext(data)
export default DataContext
