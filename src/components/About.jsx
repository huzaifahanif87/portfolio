


import { motion } from "framer-motion";
import { useState } from "react";
import Globe from "react-globe.gl"; // Ensure you have this installed
import Button from "../customs/Button"; // Adjust the path as needed

const About = ({ compact, onBack }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("huzaifahanif7555@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <motion.div
      className={`text-white flex flex-col items-center transition-all ${
        compact
          ? "w-full h-full scale-90 overflow-x-hide"
          : "h-9/10 w-full p-10 scale-100 overflow-y-auto hide-scrollbar"
      }`}
      // Replaces bg-gray-900 with a subtle black-red gradient
      style={{
        background: "linear-gradient(135deg, #1A1A1A, #2B0000)",
      }}
    >
      <div
        className={`grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 ${
          compact ? "gap-4" : "gap-21"
        } grid-cols-1 h-full w-full`}
      >
        {/* Introduction */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className={`w-full ${compact ? "h-10" : "sm:h-[276px]"} object-contain`}
            />
            <div>
              <p className={`grid-headtext ${compact ? "text-[3px]" : ""}`}>
                Hi, I’m Huzaifa Hanif
              </p>
              <p className={`grid-subtext ${compact ? "text-[3px]" : ""}`}>
                I'm a software student and developer. I have mastered the art of
                learning from problems and finding their solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className={`w-full ${compact ? "h-10" : "sm:h-[200px]"} h-fit object-contain`}
            />
            <div>
              <p className={`grid-headtext ${compact ? "text-[3px]" : ""}`}>
                Tech Stack
              </p>
              <p className={`grid-subtext ${compact ? "text-[3px]" : ""}`}>
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container">
            <div className="rounded-3xl w-full flex justify-center items-center">
              <Globe
                height={compact ? 20 : 326}
                width={compact ? 20 : 326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              />
            </div>
            <div>
              <p className={`grid-headtext ${compact ? "text-[3px]" : ""}`}>
                I’m very flexible with time zone communications & locations
              </p>
              <p className={`grid-subtext ${compact ? "text-[3px]" : ""}`}>
                I'm based in Islamabad, Pakistan and open to remote work
                worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Passion for Coding */}
        <div className="xl:col-span-2 xl:row-span-4">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className={`w-full ${compact ? "h-15" : "sm:h-[200px]"} object-contain`}
            />
            <div>
              <p className={`grid-headtext ${compact ? "text-[2px]" : ""}`}>
                My Passion for Coding
              </p>
              <p className={`grid-subtext ${compact ? "text-[2px]" : ""}`}>
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className={`w-full ${compact ? "h-15" : "sm:h-[276px]"} object-cover sm:object-top`}
            />
            <div className="space-y-2">
              <p className={`grid-subtext text-center ${compact ? "text-[3px]" : ""}`}>
                Contact me
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p
                  className={`lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ${
                    compact ? "text-[3px]" : ""
                  }`}
                >
                  huzaifahanif7555@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
