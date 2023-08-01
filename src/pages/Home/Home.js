import React from 'react'
import LandingPage from './LandingPage'


const Home = ({dark}) => {
  console.log(dark)
  return (
    <div >
      <LandingPage dark={dark}/>
    </div>
  )
}
export default Home
