import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit =async (e:any) => {
        e.preventDefault()

        try{
            const response = await fetch('https://minimalist-backend.onrender.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (response.ok) {
                window.location.href = '/'
            }
            else {
                const data = await response.json();
                setError(data.error || 'Wrong Email or Password');
                console.log(error)
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred');
        }
    }

    return (
        <div className="p-7 m-10 md:w-[600px] md:pb-10 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-[30px] text-black font-bold pb-[30px]">
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="text" name="Email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input className="py-3 px-5 m-3 border border-gray rounded w-full" type="password" name="Password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="bg-black text-white m-3 w-full px-8 py-3">Sign In</button>            
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <p className="underline"><Link to="/">Forgot Your Password?</Link></p>
            <p className="underline"><Link to="/register">Create Account</Link></p>
        </div>
    )
}

export default Login