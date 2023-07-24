import React from 'react'
import LastContainer from './Containers/LastContainer'
import SecondLastContainer from './Containers/SecondLastContainer'
import MiddleContainer from './Containers/MiddleContainer'
import FirstContainer from './Containers/FirstContainer'
import SecondContainer from './Containers/SecondContainer'

const Home = () => {
  return (
    <>
      <FirstContainer />
      <SecondContainer />
      <MiddleContainer />
      <SecondLastContainer />
      <LastContainer />
    </>
  )
}

export default Home