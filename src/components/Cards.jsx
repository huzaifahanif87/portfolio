


// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Projects from "./Projects";
// import About from "./About";
// import Contact from "./Contact";

// const sections = [
//   { id: "projects", title: "Projects", component: (compact) => <Projects compact={compact} /> },
//   { id: "about", title: "About", component: (compact) => <About compact={compact} /> },
//   { id: "contact", title: "Contact", component: (compact) => <Contact compact={compact} /> },
// ];

// const Cards = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [focusedIndex, setFocusedIndex] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (selectedCard) {
//         if (event.key === "Escape") setSelectedCard(null);
//         return;
//       }

//       if (event.key === "Enter") {
//         setSelectedCard(sections[focusedIndex]);
//       } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
//         setHoveredIndex(null);
//         setFocusedIndex((prev) => (prev + 1) % sections.length);
//       } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
//         setHoveredIndex(null);
//         setFocusedIndex((prev) => (prev - 1 + sections.length) % sections.length);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedCard, focusedIndex]);

//   return (
//     <div className="relative flex flex-wrap gap-8 justify-center items-center h-screen text-white p-10 overflow-hidden">
//       <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-80 top-1/4 left-1/4 animate-pulse"></div>
//       <div className="absolute w-[500px] h-[500px] bg-red-600 rounded-full blur-[180px] opacity-100 bottom-1/4 right-1/4 animate-pulse"></div>

//       <div className="absolute inset-0 pointer-events-none z-0 bg-black/80 backdrop-blur-xl">
//         <div className="absolute w-2 h-2 bg-red-500 rounded-full opacity-50 animate-ping left-[30%] top-[40%]"></div>
//         <div className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50 animate-ping right-[25%] bottom-[30%]"></div>
//       </div>

//       {sections.map((item, index) => {
//         const isActive = index === (hoveredIndex ?? focusedIndex);
//         return (
//           <motion.div
//             key={item.id}
//             layoutId={item.id}
//             className={`relative z-10 p-6 w-64 h-40 rounded-xl cursor-pointer transition-all flex justify-center items-center overflow-hidden
//               ${isActive ? "border-2 border-blue-400 shadow-2xl" : "border border-gray-600 shadow-md"} 
//               bg-black/40 backdrop-blur-lg hover:shadow-lg transition duration-300`}
//             whileTap={{ scale: 0.95 }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => setSelectedCard(item)}
//           >
//             <div className="w-full h-full origin-top-left">{item.component(true)}</div>
//           </motion.div>
//         );
//       })}

//       <AnimatePresence>
//         {selectedCard && (
//           <motion.div
//             layoutId={selectedCard.id}
//             className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-2xl p-4"
//             onClick={() => setSelectedCard(null)}
//           >
//             <motion.div
//               className="relative p-6 rounded-2xl shadow-2xl text-white text-center w-full h-full flex justify-center items-center
//                          bg-black/40 backdrop-blur-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedCard(null)}
//                 className="absolute top-4 left-4 w-4 h-4 rounded-full bg-red-500 hover:bg-red-700"
//               />
//               <button className="absolute top-4 left-10 w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700" />
//               <button className="absolute top-4 left-16 w-4 h-4 rounded-full bg-green-500 hover:bg-green-700" />
//               {selectedCard.component(false)}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Cards;



import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const sections = [
  { id: "projects", title: "Projects", component: (compact) => <Projects compact={compact} /> },
  { id: "about", title: "About", component: (compact) => <About compact={compact} /> },
  { id: "contact", title: "Contact", component: (compact) => <Contact compact={compact} /> },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedCard) {
        if (event.key === "Escape") setSelectedCard(null);
        return;
      }

      if (event.key === "Enter") {
        setSelectedCard(sections[focusedIndex]);
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setHoveredIndex(null);
        setFocusedIndex((prev) => (prev + 1) % sections.length);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setHoveredIndex(null);
        setFocusedIndex((prev) => (prev - 1 + sections.length) % sections.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard, focusedIndex]);

  return (
    <div className="relative flex flex-wrap gap-8 justify-center items-center h-screen text-white p-10 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-80 top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-red-600 rounded-full blur-[180px] opacity-100 bottom-1/4 right-1/4 animate-pulse"></div>

      <div className="absolute inset-0 pointer-events-none z-0 bg-black/80 backdrop-blur-xl">
        <div className="absolute w-2 h-2 bg-red-500 rounded-full opacity-50 animate-ping left-[30%] top-[40%]"></div>
        <div className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50 animate-ping right-[25%] bottom-[30%]"></div>
      </div>

      {sections.map((item, index) => {
        const isActive = index === (hoveredIndex ?? focusedIndex);
        return (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className={`relative z-10 p-6 w-64 h-40 rounded-xl cursor-pointer transition-all flex justify-center items-center overflow-hidden
              ${isActive ? "border-2 border-blue-400 shadow-2xl" : "border border-gray-600 shadow-md"} 
              bg-black/40 backdrop-blur-lg hover:shadow-lg transition duration-300
              max-sm:w-full max-sm:h-[200px] max-sm:flex-col max-sm:justify-center max-sm:text-center`} // Added responsive mobile styles here
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedCard(item)}
          >
            <div className="w-full h-full origin-top-left">{item.component(true)}</div>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            layoutId={selectedCard.id}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-2xl p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="relative p-6 rounded-2xl shadow-2xl text-white text-center w-full h-full flex justify-center items-center
                         bg-black/40 backdrop-blur-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 left-4 w-4 h-4 rounded-full bg-red-500 hover:bg-red-700"
              />
              <button className="absolute top-4 left-10 w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700" />
              <button className="absolute top-4 left-16 w-4 h-4 rounded-full bg-green-500 hover:bg-green-700" />
              {selectedCard.component(false)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
