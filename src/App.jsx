import { useState } from 'react'
import Chapter4RoutingASE from './Chapter4RoutingASE'
import DynamicRouting from './DynamicRouting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>后盾网API</h3>
      <DynamicRouting />
      <Chapter4RoutingASE />
    </div>
  )
}

export default App
