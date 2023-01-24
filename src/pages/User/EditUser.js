import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {

    const [user, setUser] = useState([])
    const naviget = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res => setUser(res.data))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: parseInt(e.target.phone.value),
            imgUrl: e.target.imgUrl.value,
        };
        axios.patch(`http://localhost:5000/users/${id}`, user)
            .then(res => res.json());
    }

    return (
        <div className="hero min-h-screen p-0 md:p-20 h-[100vh]  bg-sky-500 flex flex-col  w-full">
            <div className="w-[50%] bg-white p-10 rounded-md">
                <form onSubmit={handleUpdate}>
                    <div className="form-control mb-3">
                        <label className='text-lg font-semibold text-gray-400'>Name</label>
                        <input type="text" className='p-1 outline-none rounded-md border border-x-sky-200' defaultValue={user?.name} name='name' placeholder='Name' />
                    </div>
                    <div className="form-control mb-3">
                        <label className='text-lg font-semibold text-gray-400'>Email</label>
                        <input type="text" className='p-1 outline-none rounded-md border border-x-sky-200' defaultValue={user?.email} name='email' placeholder='Email' />
                    </div>
                    <div className="form-control mb-3">
                        <label className='text-lg font-semibold text-gray-400'>Phone</label>
                        <input type="text" className='p-1 outline-none rounded-md border border-x-sky-200' defaultValue={user?.phone} name="phone" placeholder='Phone' />
                    </div>
                    <div className="form-control mb-3">
                        <label className='text-lg font-semibold text-gray-400'>Image</label>
                        <input type="text" className='p-1 outline-none rounded-md border border-x-sky-200' defaultValue={user?.imgUrl} name='imgUrl' placeholder='image url' />
                    </div>
                    <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;