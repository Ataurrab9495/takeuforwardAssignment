import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    const [bannerData, setBannerData] = useState({
        description: "",
        timer: 0,
        link: "",
        visible: false,
    });

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/banner')
        .then(res => res.json())
        .then(data => setBannerData(data[0]));
    },[]);


    // handlechange function is for to store the data in state 
    const handleChange = (e) => {
        setBannerData(prev => (
            { ...prev, [e.target.name]: e.target.value }
        ))
    }

    // handleToggle function is to change the value of visibility state
    const handleToggle = () => {
        setBannerData(prev => ({
            ...prev, visible: !prev.visible
        }))
    }

    // submit the form data
    const handleSubmit = e => {
         /* e.preventDefault(); */

        fetch("http://localhost:8080/api/v1/banner",{
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerData),
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    
    return (
        <>
            <div className='my-6 px-10 py-5 border border-gray-500 rounded-md max-w-4xl mx-auto'>
                <p className="font-bold underline text-2xl my-3 text-center">Dashboard</p>
                <div className="mt-3">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                            Banner Description
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="description"
                                                name="description"
                                                type="description"
                                                autoComplete="description"
                                                value={bannerData?.description}
                                                onChange={handleChange}
                                                className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor='timer' className="block text-sm font-medium leading-6 text-gray-900">
                                            Timer (sec)
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="timer"
                                                name="timer"
                                                type="number"
                                                autoComplete="timer"
                                                value={bannerData?.timer}
                                                onChange={handleChange}
                                                className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="Link" className="block text-sm font-medium leading-6 text-gray-900">
                                            Link
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="Link"
                                                name="link"
                                                type="text"
                                                autoComplete="Link"
                                                value={bannerData?.link}
                                                onChange={handleChange}
                                                className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="visible"
                                                name="visible"
                                                type="checkbox"
                                                checked={bannerData?.visible}
                                                onChange={handleToggle}
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="visible" className="block text-sm font-medium leading-6 text-gray-900">
                                                visible
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard;