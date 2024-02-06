import { Link } from "react-router-dom"
import { useState } from "react"


function Register() {
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await fetch('https://minimalist-backend.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fname, lname, email, password })
      })
      if (response.ok) {
        window.location.href = '/login'
      }
      else {
        const data = await response.json();
        setError(data.error || 'An error occurred' );
        console.log(error)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred');
    }
  }

  return (
    <div>
      <div className="p-7 m-10 md:w-[600px] md:pb-10 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-[30px] text-black font-bold pb-[30px]">
          Create Account
        </h1>
        <form onSubmit={handleSubmit}>
          <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="fname" placeholder="First Name" value={fname} onChange={(e) => setFName(e.target.value)} />
          <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="lname" placeholder="Last Name" value={lname} onChange={(e) => setLName(e.target.value)} />
          <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-black text-white m-3 w-full px-8 py-3">Create</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="underline"><Link to="/login">Already registered?</Link></p>
      </div>
    </div>
  )
}

export default Register