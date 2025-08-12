export class LocatorAnim extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Attach HTML + CSS to the shadow DOM
    this.shadowRoot.innerHTML = `
      <style>

      </style>
      <canvas id="myCanvas"></canvas>  
    `;
  }

  connectedCallback() {
    const canvas = this.shadowRoot.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    //  Obțineți raportul pixelilor dispozitivului
    const dpr = window.devicePixelRatio || 1;

    // Setați dimensiunea CSS a pânzei (dimensiune logică)
    canvas.style.width = '1920px';
    canvas.style.height = '474px';

    // Setează dimensiunea reală a pixelilor pânzei
    canvas.width = 1920 * dpr;
    canvas.height = 474 * dpr;

    const centerX = canvas.width / 2;
    const centerY = 960;
    const radius = 960;

    let angle = 299;

    // // Set global alpha if you want to make strokes semi-transparent too
    // ctx.globalAlpha = 1;
    //
    // const draw = () => {
    //   // Fade using destination-out with full alpha fill, low globalAlpha
    //   ctx.globalCompositeOperation = 'destination-out';
    //   ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    //   ctx.globalAlpha = 0.05; // ← fade strength
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    //
    //   // ctx.fillStyle = "rgb(30 30 30 / 5%)";  // ← Fading rectangle
    //   // ctx.fillRect(0, 0, canvas.width, canvas.height);  // ← Applied over entire canvas
    //
    //   // Back to normal drawing
    //   ctx.globalCompositeOperation = 'source-over';
    //   ctx.globalAlpha = 1;
    //
    //
    //   // Compute endpoint
    //   const x = centerX + radius * Math.cos(angle);
    //   const y = centerY + radius * Math.sin(angle);
    //
    //   // Draw the line
    //   ctx.beginPath();
    //   ctx.moveTo(centerX, centerY);
    //   ctx.lineTo(x, y);
    //   ctx.strokeStyle = 'rgba(128, 128, 128, 1)';
    //   ctx.lineWidth = 4;
    //   ctx.stroke();
    //
    //   angle += 0.002;
    //
    //   requestAnimationFrame(draw);
    // };

    let lastTimestamp = performance.now();

    const draw = (timestamp) => {
      const deltaTime = (timestamp - lastTimestamp) / 1000; // seconds
      lastTimestamp = timestamp;

      // Calculate fading strength based on time passed
      const decayRate = 4; // Adjust to control fade speed (units: per second)
      const alpha = Math.exp(-decayRate * deltaTime); // Exponential decay

      // Fading with destination-out
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.globalAlpha = 1 - alpha;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the rotating line
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(128, 128, 128, 0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();

      angle += 0.002;

      requestAnimationFrame(draw);
    };


    draw();
  }

}

customElements.define('locator-anim', LocatorAnim);
