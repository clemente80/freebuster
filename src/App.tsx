import React from 'react'

import {Container} from './styles'
import HeaderComponent from './components/header'
import MainComponent from './components/main'

function App() {
  return (
    <>
    <Container>
      <HeaderComponent />
      <MainComponent />
    </Container>
    </>
  )
}

export default App
