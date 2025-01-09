import React, { useEffect, useState } from 'react';
import Head from 'next/head'

const Home: React.FC = () => {
  const [earthTime, setEarthTime] = useState<string>('');
  const [millersTime, setMillersTime] = useState<string>('');

  useEffect(() => {
    const earthStartTime = Date.now();
    const millersStartTime = Date.now();

    const updateTime = () => {
      const earthElapsedTime = Date.now() - earthStartTime;
      const millersElapsedTime = earthElapsedTime / 7; // Time dilation (7 years for 1 hour)
      
      const earthDate = new Date(earthStartTime + earthElapsedTime);
      const millersDate = new Date(millersStartTime + millersElapsedTime);

      setEarthTime(earthDate.toLocaleTimeString());
      setMillersTime(millersDate.toLocaleTimeString());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

    <Head>
    <title>Earth Time vs Miller's Planet Time</title>
  </Head>
    <div id="main" className="flex flex-col  text-center justify-between items-center justify-center min-h-screen max-h-full  text-white">
     <div className='mt-40 px-5'>
     <h1 className="text-3xl mb-4 ">Time Dilation Demonstration</h1>
      <div className="text-xl mb-4">
        <p>Earth Time: <span>{earthTime}</span></p>
        <p>Miller's Planet Time: <span>{millersTime}</span></p>
      </div>

      <div className="mt-6 text-center text-sm">
        <p>Time on Earth vs. Miller's Planet: 1 hour on Miller's Planet = 7 years on Earth.</p>
      </div>
     </div>
     
<div className='p-3'>
<a href="https://oksurya.com/">Created by oksurya</a> <a href="https://v0.dev">With v0</a>
</div>
    </div>
    </>
  );
};

export default Home;
