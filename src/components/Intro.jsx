

// import { motion } from "framer-motion";

// const Intro = ({ onFinish }) => {
//   return (
//     <motion.div
//       className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0, x: "-100vw" }}
//       transition={{ duration: 1, delay: 3.5 }}
//       onAnimationComplete={onFinish}
//     >
//       {/* Glowing Background Animation */}
//       <div className="absolute w-[400px] h-[400px] bg-red-600 rounded-full blur-[150px] opacity-40 top-1/3 left-1/4 animate-pulse"></div>
//       <div className="absolute w-[500px] h-[500px] bg-red-900 rounded-full blur-[180px] opacity-30 bottom-1/3 right-1/4 animate-pulse"></div>
//       <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-20 top-1/2 left-1/3 animate-pulse"></div>
      
//       {/* Name with 3D Text Effect */}
//       <motion.h1
//         className="text-6xl md:text-7xl font-extrabold text-white relative"
//         initial={{ y: -10 }}
//         animate={{ y: [0, -5, 0] }}
//         transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//       >
//         <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 drop-shadow-xl">
//           Huzaifa Hanif
//         </span>
//       </motion.h1>

//       {/* Subtitle with Floating Animation */}
//       <motion.p
//         className="text-lg md:text-xl mt-4 font-light text-gray-300"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         Web Developer | Designer | Creator
//       </motion.p>
//     </motion.div>
//   );
// };

// export default Intro;


import { motion } from "framer-motion";
import profilePic from "../assets/me.png"; // Adjust path if needed

const Intro = ({ onFinish }) => {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, x: "-100vw" }}
      transition={{ duration: 1, delay: 3.5 }}
      onAnimationComplete={onFinish}
    >
      {/* Glowing Background Animation */}
      <div className="absolute w-[400px] h-[400px] bg-red-600 rounded-full blur-[150px] opacity-40 top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-red-900 rounded-full blur-[180px] opacity-30 bottom-1/3 right-1/4 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-20 top-1/2 left-1/3 animate-pulse"></div>
      
      {/* Profile Picture with Floating Effect */}
      <motion.img
        src={profilePic}
        alt="Huzaifa Hanif"
        className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full shadow-xl border-4 border-red-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Name with 3D Text Effect */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white mt-4 relative"
        initial={{ y: -10 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 drop-shadow-xl">
          Huzaifa Hanif
        </span>
      </motion.h1>

      {/* Subtitle with Floating Animation */}
      <motion.p
        className="text-lg md:text-xl mt-2 font-light text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Web Developer | Designer | Creator
      </motion.p>
    </motion.div>
  );
};

export default Intro;
