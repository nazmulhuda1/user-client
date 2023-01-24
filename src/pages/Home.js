import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    const loaderUser = () => {
        axios.get('http://localhost:5000/users')
            .then(res => setUsers(res.data.reverse()))
    }
    useEffect(() => {
        loaderUser()
    }, [users])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(loaderUser());
    }
    return (
        <div className='p-0 md:p-20 h-[100vh]  bg-sky-500 flex flex-col  w-full'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-bold text-3xl mb-5'>Data Table</h1>
                <div className="overflow-x-auto min-h-[50vh] w-[80%]">
                    <div className="overflow-hidden">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No:</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No:</th>
                                    <th className='flex items-center justify-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) =>
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <th>
                                            <div className='flex items-center justify-start'>
                                                <img className='h-10 w-10 mr-3' src={user.imgUrl} alt="" />
                                                <h3 className='text-gray-600 font-semibold'>{user.name}</h3>
                                            </div>
                                        </th>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td >
                                            <div className='flex items-center space-x-4 justify-center'>
                                                <Link to={`/user/${user._id}`} className='bg-green-400 text-white px-3 py-1 rounded-xl w-9 h-9 items-center justify-center flex p-8'><i class="ri-eye-line text-xl"></i></Link>

                                                <Link to={`/edit/${user._id}`} className='bg-yellow-400 text-white px-3 py-1 rounded-xl w-9 h-9 items-center justify-center flex p-8'><i class="ri-edit-line text-xl"></i></Link>

                                                <button onClick={() => handleDelete(user._id)} className='bg-red-400 text-white px-3 py-1 rounded-xl w-9 h-9 items-center justify-center flex p-8'><i class="ri-delete-bin-line text-xl"></i></button>

                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;