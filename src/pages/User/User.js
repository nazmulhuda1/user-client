import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res => {
                setUser(res.data)
            })
    }, [id])

    return (
        <div className='p-0 md:p-20 h-[100vh]  bg-sky-500 flex flex-col  w-full items-center justify-center'>
            <div className=" w-[40%] p-5 border rounded-md bg-white border-x-sky-100 ">
                <div className="items-center justify-center flex">
                    <img className='w-20 h-20  rounded-2xl' src={user.imgUrl} alt="" />
                </div>
                <div className=" my-10">
                    <div className="py-3 px-5  border items-center justify-between flex">
                        <label className='font-semibold text-xl text-gray-600'>Name </label>
                        <label className='text-lg font-semibold text-gray-800'>{user.name}</label>
                    </div>
                    <div className="py-3 px-5  border items-center justify-between flex">
                        <label className='font-semibold text-xl text-gray-600'>Email </label>
                        <label className='text-lg font-semibold text-gray-800'>{user.email}</label>
                    </div>
                    <div className="py-3 px-5  border items-center justify-between flex">
                        <label className='font-semibold text-xl text-gray-600'>Phone </label>
                        <label className='text-lg font-semibold text-gray-800'>{user.phone}</label>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default User;