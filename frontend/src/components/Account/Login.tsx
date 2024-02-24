import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axiosInstance from '../../../axiosInstance'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setUserIdInHeaders();
    }, []);

    // function to send token to local storage, will be used from storage in axiosInstance to send userId to header
    const setUserIdInHeaders = () => {
        try {
            console.log(localStorage.getItem('token'))
            const token = localStorage.getItem('token');
            if (token) {
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                console.log('Token set in headers:', token);
            }
        } catch (error) {
            console.error('Error setting token in headers:', error);
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        try{
        //     const token = localStorage.getItem('token'); 
        // if (!token) {
        //     // Handle case where token is not found
        //     console.error('Token not found in localStorage');
        //     return;
        // }

            const response = await axiosInstance.post('/api/users/login', { email, password }, 
            // {
                // headers: {
                //     'Authorization': `Bearer ${token}` 
                // }
            // }
            );
    
            // Log the authorization header
            // console.log('Authorization header:', `Bearer ${token}`);

            if (response.status===200) {
                const token = response.data.token
                console.log(token)
                localStorage.setItem('token', token)
                console.log(localStorage.getItem('token'))

                setUserIdInHeaders() // set the UserId once login is successfull
                window.location.href = '/'
            }
            else {
                const data = await response.data
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
