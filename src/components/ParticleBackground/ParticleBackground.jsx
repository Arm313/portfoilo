import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import React from "react";

const ParticleBackground = (props) => {
 
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
  
    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#121212",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 150,
            },
          },
        },
        particles: {
          color: {
            value: "#FFFFFF",
          },
          links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
  
    return <Particles  id={props.id} init={particlesLoaded} options={options} />; 
  };

export default ParticleBackground;
