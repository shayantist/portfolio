import Particles from "react-particles-js";

export default function ParticleCandy() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 2,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.02,
          },
          move: {
            random: true,
            speed: 0.25,
            direction: "top",
            out_mode: "out",
          },
          shadow: {
            enable: true,
            color: "#DC143C",
            blur: 1,
          },
        },
        // interactivity: {
        //   events: {
        //     onhover: {
        //       enable: true,
        //       mode: "bubble",
        //     },
        //   },
        //   modes: {
        //     bubble: {
        //       size: 6,
        //       distance: 40,
        //     },
        //   },
        // },
      }}
    />
  );
}
