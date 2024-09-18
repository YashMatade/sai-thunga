import React, { useState, useEffect } from 'react';
import './Analytics.css';
import heart from '/hrt.png';

const Analytics = () => {
  const AnalyticsInfo = [
    {
      img: heart,
      count: 12575,
      name: 'Cardiology'
    },
    {
      img: heart,
      count: 8543,
      name: 'Neurology'
    },
    {
      img: heart,
      count: 15879,
      name: 'Pediatrics'
    },
    {
      img: heart,
      count: 6541,
      name: 'Dermatology'
    },
    {
      img: heart,
      count: 7520,
      name: 'Orthopedics'
    }
  ];

  const useCountUp = (target, delayStart) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000; // Duration of animation in milliseconds
      const increment = Math.ceil(end / duration * 20); // Calculate increment per 20ms

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(interval); // Stop when the target is reached
          } else {
            setCount(start);
          }
        }, 20); // Update every 20ms

        return () => clearInterval(interval); // Cleanup interval
      }, delayStart); // Delay start

      return () => clearTimeout(timer); // Cleanup timer
    }, [target, delayStart]);

    return count;
  };

  return (
    <div className="container-fluid">
      <div className="analytics-container">
        {AnalyticsInfo.map((info, index) => {
          // Each counter will start 2.5 seconds after the previous one completes
          const delayStart = index * 2500;
          const animatedCount = useCountUp(info.count, delayStart);

          return (
            <div className="analytics-item" key={index}>
              <img src={info.img} alt={info.name} className='img-fluid'/>
              <div>
                <p>{animatedCount.toLocaleString()}+</p>
              </div>
              <div>
                {info.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;
