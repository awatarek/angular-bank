export const ParticlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1400
        }
      },
      color: {
        value: '#15836D'
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 1,
          color: '#15836D'
        },
        polygon: {
          nb_sides: 6
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.05,
          opacity_min: 0.25,
          sync: true
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1.25,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#15836D',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: .2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 2000,
          rotateY: 2000
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: false,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 3
          }
        },
        repulse: {
          distance: 250,
          duration: 2
        }
      }
    },
    retina_detect: true
 };