"use client"
import {useState} from "react"
export default function Home() {

  const [name, setName] = useState("saboor")
  
  
  const [age, setAge] = useState(42)  
  // let name = "Saboor"

  const changeName = () => {
      setName("Nida")
      setAge(age-2)
     }
     const DecreaseAge = () => {
      
      setAge(age-1)
     }
     const IncreaseAge = () => {
      
      setAge(age+1)
     }

  return (
    <div className="text-center text-5xl text-blue-600">
      <h2>useState</h2>
      <br/>
      <h3>React hook</h3>
      <br/>
      <p>{name} is {age}</p>
      <br/>
      <button onClick={changeName} className="text-red-600">Change Name Button</button>
      <br/>
      <button onClick={IncreaseAge} className="text-red-600">Add Button</button>
      <br/>
      <button onClick={DecreaseAge} className="text-red-600">Subtract Button</button>
      </div>
  )
}