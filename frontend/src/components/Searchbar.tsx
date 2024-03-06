import { useState } from "react"


function Searchbar() {
  const [input ,setInput] = useState('')
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }
  console.log(input)
  return (
    <div >
        <input className="py-1 px-2 rounded" type="text" name="" onChange={handleChange} placeholder="Search item..." />
    </div>
  )
}

export default Searchbar