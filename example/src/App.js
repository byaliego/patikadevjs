import React from 'react'

import { Button } from 'clarkui'
import 'clarkui/dist/index.css'
import './index.css'

const App = () => {
  return (
    <>

       <div className="App">
  <h1>Buttons</h1>
       
       <Button text="Button Glow Effect" effect='glow' />
       <Button text="Button Door Effect" effect="door"/>
       <Button text="Button Shutter Up Effect" effect="shutterUp"/>
       <Button text="Button Shutter Down Effect" effect="shutterDown"/>
       <Button text="Button Double Effect" effect="double" />
       </div>
      
    </>
   
    )
}

export default App
