import { Link } from "react-router-dom"

function Register() {
  return (
    <div>
      <div className="p-7 m-10 md:w-[600px] md:pb-10 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-[30px] text-black font-bold pb-[30px]">
          Create Account
        </h1>
        <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="fname" placeholder="First Name" id="" />
        <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="lname" placeholder="Last Name" id="" />
        <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Email" placeholder="Email" id="" />
        <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Password" placeholder="Password" id="" />
        <button className="bg-black text-white m-3 w-full px-8 py-3">Create</button>
        <p className="underline"><Link to="/login">Already registered?</Link></p>
      </div>
    </div>
  )
}

export default Register