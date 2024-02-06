type Props = {}
import { Link } from "react-router-dom"

function Login({ }: Props) {
    return (
        <div className="p-7 m-10 md:w-[600px] md:pb-10 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-[30px] text-black font-bold pb-[30px]">
                Login
            </h1>
            <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Email" placeholder="Email" id="" />
            <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Password" placeholder="Password" id="" />
            <button className="bg-black text-white m-3 w-full px-8 py-3">Sign In</button>
            <p className="underline"><Link to="/">Forgot Your Password?</Link></p>
            <p className="underline"><Link to="/register">Create Account</Link></p>
        </div>
    )
}

export default Login