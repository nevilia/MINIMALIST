import {useState} from 'react'
import axiosInstance from '../../../axiosInstance';
import { useParams } from 'react-router-dom';

type Props = {}

function Details({}: Props) {
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const { userId } = useParams()

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newData = { address, pincode, city, state, country, phoneNo };
            const res = await axiosInstance.post(`/api/contact/${userId}`, newData);
            console.log('Data submitted successfully:', res.data);
            window.location.href = `/user/${userId}`
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };


  return (
    <div className='flex justify-center'>
        <form className='p-20 w-full sm:w-[90%] md:-w-[70%] lg:w-[50%] flex flex-col justify-center gap-2 '  onSubmit={handleSubmit}>
            <label>Address</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setAddress(e.target.value)} type="text" name="address" placeholder="Full address" />
            <label>Pin Code</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setPincode(e.target.value)}   type="text" name="pincode" placeholder="Pin Code" />
            <label>City</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setCity(e.target.value)}   type="text" name="city" placeholder="City" />
            <label>State</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setState(e.target.value)}   type="text" name="state" placeholder="State" />
            <label>Country</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setCountry(e.target.value)}   type="text" name="country" placeholder="Country" />
            <label>Phone Number</label>
            <input className='border py-2 px-3 rounded-xl' onChange={(e) => setPhoneNo(e.target.value)}   type="text" name="phoneNo" placeholder="Phone Number" />
            <button className="flex justify-center p-4 bg-black text-white" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Details