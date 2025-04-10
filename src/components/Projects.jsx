
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { myProjects } from "../constants/index.js";
import CanvasLoader from "../customs/Loading.jsx";
import DemoComputer from "../customs/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = ({ compact }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setCanvasKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, [compact]);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 0.0, stagger: 0.2, ease: "power2.inOut" }
    );
  }, []);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <div className={`w-full h-full ${compact ? "scale-90" : "scale-100"} max-sm:scale-[0.85]`}>
      <section className={`c-space my-${compact ? "3" : "10"} w-full h-8/10`}>
        <p
          className={`head-text ${compact ? "text-[5px] my-0" : " font-[Poppins] tracking-wide  my-3 text-4xl font-extrabold uppercase tracking-wide"
            } text-white bg-opacity-20 backdrop-blur-lg  px-4 py-2 rounded-lg max-sm:text-xl max-sm:py-1 max-sm:px-2`}
        >
          My Selected Work
        </p>

        <div
          className={`grid lg:grid-cols-2 grid-cols-1 mt-${compact ? "2" : "12"
            } h-${compact ? "full" : "120"} gap-${compact ? "1" : "5"
            } w-full max-sm:gap-2 max-sm:mt-4`}
        >
          {/* Left Content Box */}
          <div
            className={`
              relative flex flex-col gap-${compact ? "1" : "6"
              } p-4 rounded-xl w-full h-auto max-w-full max-h-full overflow-hidden
              shadow-lg 
              bg-gradient-to-br from-[#1A1A1A] to-[#200000]
              max-sm:gap-2 max-sm:p-2
            `}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 40%)",
              }}
            />

            <div className="absolute top-0 right-0 w-full h-full">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className={`object-cover rounded-xl w-full h-auto max-h-80 ${compact ? "h-5" : ""
                  } max-sm:max-h-40`}
              />
            </div>

            <div
              className={`p-1 ${compact ? "w-2 h-2" : "w-fit h-12"
                } backdrop-filter backdrop-blur-3xl rounded-lg max-sm:w-6 max-sm:h-6`}
              style={currentProject.logoStyle}
            >
              <img
                className={`${compact ? "w-2 h-2" : "w-10 h-10"} shadow-sm max-sm:w-6 max-sm:h-6`}
                src={currentProject.logo}
                alt="logo"
              />
            </div>

            <div
              className={`${compact ? "gap-1" : "gap-5"
                } ${compact ? "h-10" : "h-70"
                } flex flex-col text-white z-10 w-full max-sm:gap-2 max-sm:h-fit`}
            >
              <p
                className={`font-semibold animatedText ${compact ? "text-[2px]" : "text-2xl"
                  } max-sm:text-base`}
              >
                {currentProject.title}
              </p>
              <p
                className={`animatedText ${compact ? "text-[2px]" : "text-l"
                  } max-sm:text-sm`}
              >
                {currentProject.desc}
              </p>
              <p
                className={`animatedText ${compact ? "text-[2px]" : "text-l"
                  } max-sm:text-sm`}
              >
                {currentProject.subdesc}
              </p>
            </div>

            <div
              className={`flex items-center flex-wrap z-10 ${compact ? "gap-1" : "gap-5"
                } max-sm:gap-2`}
            >
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img
                    className={`${compact ? "w-1 h-1" : "w-8 h-8"} max-sm:w-5 max-sm:h-5`}
                    src={tag.path}
                    alt={tag.name}
                  />
                </div>
              ))}
            </div>

            <div
              className={`flex justify-between items-center z-10 ${compact ? "mt-1" : "mt-10"
                } max-sm:mt-2`}
            >
              <button
                className={`arrow-btn ${compact ? "w-1 h-1" : "w-8 h-8"
                  } max-sm:w-6 max-sm:h-6`}
                onClick={() => handleNavigation("previous")}
              >
                <img
                  src="assets/left-arrow.png"
                  alt="left arrow"
                  className="w-full h-full object-contain"
                />
              </button>

              <button
                className={`arrow-btn ${compact ? "w-1 h-1" : "w-8 h-8"
                  } max-sm:w-6 max-sm:h-6`}
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="assets/right-arrow.png"
                  alt="right arrow"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>

          {/* Right 3D Model Box */}
          <div
            className={`relative rounded-lg w-full overflow-hidden shadow-lg
            border border-[#2A2A2A]
            bg-gradient-to-br from-[#1A1A1A] to-[#200000] max-sm:h-64`}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 40%)",
              }}
            />

            <Canvas key={canvasKey} className="w-full h-full">
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={compact ? [1, 1, 1] : [2, 2, 2]}
                    position={[0, -2, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} />
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
