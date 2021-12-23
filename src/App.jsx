import { useEffect, useState } from "react"
import { render } from "react-dom"

function App() {

  const [data, setData] = useState("")
  
  useEffect(() => fetch("https://restcountries.com/v3.1/all").then(res => {
    if(res.ok == true){
      res.json() .then(dataJSON => {
        setData(dataJSON)
      })
    }
  }), [])

  console.log(data)
  return (
    <div className="App">
      <h1>Working</h1>
    </div>
  )
}

export default App
