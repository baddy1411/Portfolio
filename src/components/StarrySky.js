'use client'; // Ensure it's a Client Component

import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class StarrySky extends React.Component {
  state = {
    num: 60,
    vw: 0,
    vh: 0,
    stars: [] // Store star data here
  };

  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [
        { value: "150px" },
        { value: "0px" }
      ],
      translateX: 350
    });
  };

  randomRadius = () => Math.random() * 0.7 + 0.6;

  getRandomX = () => Math.floor(Math.random() * this.state.vw);

  getRandomY = () => Math.floor(Math.random() * this.state.vh);

  generateStars = () => {
    const stars = Array.from({ length: this.state.num }, () => ({
      cx: this.getRandomX(),
      cy: this.getRandomY(),
      r: this.randomRadius()
    }));
    this.setState({ stars });
  };

  componentDidMount() {
    // Set viewport dimensions and generate stars after mounting
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({ vw, vh }, this.generateStars);

    this.starryNight();
    this.shootingStars();
  }

  render() {
    const { stars, num } = this.state;
    return (
      <div id="App">
        <svg id="sky">
          {stars.map((star, index) => (
            <circle
              key={index}
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              stroke="none"
              strokeWidth="0"
              fill="white"
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars">
          {[...Array(num)].map((_, index) => (
            <div
              key={index}
              className="wish"
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StarrySky;
