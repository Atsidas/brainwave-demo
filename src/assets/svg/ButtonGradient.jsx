// const ButtonGradient = () => {
//   return (
//     <svg className="block" width={0} height={0}>
//       <defs>
//         <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
//           <stop offset="0%" stopColor="#89F9E8" />
//           <stop offset="100%" stopColor="#FACB7B" />
//         </linearGradient>
//         <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
//           <stop offset="0%" stopColor="#D87CEE" />
//           <stop offset="100%" stopColor="#FACB7B" />
//         </linearGradient>
//         <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
//           <stop offset="0%" stopColor="#9099FC" />
//           <stop offset="100%" stopColor="#89F9E8" />
//         </linearGradient>
//         <linearGradient
//           id="btn-right"
//           x1="14.635%"
//           x2="14.635%"
//           y1="0%"
//           y2="100%"
//         >
//           <stop offset="0%" stopColor="#9099FC" />
//           <stop offset="100%" stopColor="#D87CEE" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

// export default ButtonGradient;

import { useState, useEffect } from "react";

const ButtonGradient = () => {
  const [gradientStops, setGradientStops] = useState([
    { offset: "0%", color: "#ffc876" },
    { offset: "25%", color: "#79fff7" },
    { offset: "50%", color: "#9f53ff" },
    { offset: "75%", color: "#ff98e2" },
    { offset: "100%", color: "#ffc876" },
  ]);

  useEffect(() => {
    const colors = ["#ffc876", "#79fff7", "#9f53ff", "#ff98e2"];
    let step = 0;

    const interval = setInterval(() => {
      step = (step + 1) % colors.length;
      const newGradientStops = gradientStops.map((stop, index) => ({
        offset: `${index * 25}%`,
        color: colors[(step + index) % colors.length],
      }));
      setGradientStops(newGradientStops);
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval);
  }, [gradientStops]);

  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
