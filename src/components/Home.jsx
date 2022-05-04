import React from 'react'

const Home = ({titulo}) => {
  return (
    <div className='h-screen p-15'>

        <h1 className="text-center text-4xl font-bold pt-10 text-current">{titulo}</h1>
        
    </div>
  )
}

export default Home