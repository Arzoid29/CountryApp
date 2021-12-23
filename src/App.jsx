import {useEffect} from "react"

function App() {
  useEffect(fetch("https://restcountries.com/v3.1/all").then(res => {
    if(res.ok == true){
      res.json() .then(data => {
        console.log(data)
      })
    }
  }),[])
  

  return (
    <div className="App">
    </div>
  )
}

export default App
