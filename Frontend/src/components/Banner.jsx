import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [bannerData, setBannerData] = useState({});
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        fetch("https://takeuforwardassignmentbackend.onrender.com/api/v1/banner",{
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            setBannerData(data);
            setTimer(data.timer);
        })

        const interval = setInterval(() => {
            setTimer(prev => prev > 0 ? prev-1: 0);
        }, 1000);

        return () => clearInterval(interval);
    },[]);

    if(timer <= 0 || !bannerData.visible) return null;

    return (
        <>
            <div className="bg-blue-700 text-white flex justify-center items-center flex-col h-96 gap-3">
                <p className="text-4xl">{bannerData.description}</p>
                {bannerData.link && <a href={bannerData.link} className="underline" target="_blank">click on this link.</a>}
                <p>Time left: {timer} seconds</p>
            </div>
        </>
    )
}

export default Banner;