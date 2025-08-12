export class CanvasLineanim extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .indentificare_container{
          opacity: var(--opa-back);
        }
      </style>

      <div>
        <canvas id="myCanvas" class="indentificare_container"></canvas>
      </div> 
    `;
  }

  connectedCallback() {
    const canvas = this.shadowRoot.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    //  Obțineți raportul pixelilor dispozitivului
    const dpr = window.devicePixelRatio || 1;

    // Setați dimensiunea CSS a pânzei (dimensiune logică)
    canvas.style.width = '1920px';
    canvas.style.height = '960px';

    // Setează dimensiunea reală a pixelilor pânzei
    canvas.width = 1920 * dpr;
    canvas.height = 960 * dpr;

    // Scalați contextul pentru a ține cont de raportul pixelilor
    ctx.scale(dpr, dpr);

    // for (let i = 0; i < 122; i++) {
    //   ctx.beginPath();
    //   ctx.arc(960, 960 + (i * 4), 960, 0, Math.PI * 2);
    //   ctx.lineWidth = 1; // Grosimea linii
    //   ctx.strokeStyle = '#808080';
    //   ctx.stroke();
    //   ctx.closePath();
    // }


    // const centerX = canvas.width / 2;
    // const centerY = 960;
    //
    // const spacing = 8;           // Visual spacing between rings
    // const growSpeed = 0.5;         // Pixels per frame
    // const spawnInterval = 8;    // New circle every N frames
    // const maxRadius = 960;       // When to remove circle
    //
    // let circles = [];
    // let frameCount = 0;
    //
    //
    // // 🔁 Pre-fill circles as if the animation had been running
    // const numPreCircles = Math.floor(maxRadius / (growSpeed * (spawnInterval / 1)));
    // for (let i = numPreCircles; i >= 0; i--) {
    //   circles.push({radius: i * growSpeed * (spawnInterval / 1)});
    // }
    //
    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    //   ctx.beginPath();
    //   ctx.arc(960, 960, 960, 0, Math.PI * 2);
    //   ctx.lineWidth = 1; // Grosimea linii
    //   ctx.strokeStyle = '#808080';
    //   ctx.stroke();
    //   ctx.closePath();
    //
    //   // Update and draw each circle
    //   circles.forEach((circle) => {
    //     circle.radius += growSpeed;
    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, circle.radius, 0, Math.PI * 2);
    //     ctx.strokeStyle = '#808080';
    //     ctx.lineWidth = 1;
    //     ctx.stroke();
    //     ctx.closePath();
    //   });
    //
    //   // Remove circles that are too big
    //   circles = circles.filter(c => c.radius < maxRadius);
    //
    //   // Add new circle at interval
    //   if (frameCount % spawnInterval === 0) {
    //     circles.push({radius: 0});
    //   }
    //
    //   frameCount++;
    //   requestAnimationFrame(draw);
    // }
    //
    // draw();

    // const growSpeed = 0.5;
    // const spawnInterval = 8;
    // const maxRadius = 960;
    // const lineWidth = 1;
    //
    // const numPreCircles = Math.ceil(maxRadius / (growSpeed * spawnInterval));
    //
    // let circles = [];
    // let frameCount = 0;
    //
    // // Seed initial circles
    // for (let i = numPreCircles; i >= 0; i--) {
    //   circles.push({radius: i * growSpeed * spawnInterval});
    // }
    //
    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    //   circles.forEach((circle) => {
    //     circle.radius += growSpeed;
    //
    //     // Fade out as radius increases
    //     const alpha = (1 - circle.radius / maxRadius) * 10;
    //
    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, circle.radius, 0, Math.PI * 2);
    //     ctx.strokeStyle = `rgba(128, 128, 128, ${alpha})`; // Purple with dynamic alpha
    //     ctx.lineWidth = lineWidth;
    //     ctx.stroke();
    //     ctx.closePath();
    //   });
    //
    //   // Remove fully faded-out circles
    //   circles = circles.filter(c => c.radius < maxRadius);
    //
    //   // Add new circle on interval
    //   if (frameCount % spawnInterval === 0) {
    //     circles.push({radius: 0});
    //   }
    //
    //   frameCount++;
    //   requestAnimationFrame(draw);
    // }
    //
    // draw();

    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;
    //
    // const growSpeed = 1;         // How fast all radii shift outward
    // const baseSpacing = 12;      // Average spacing between rings
    // const amplitude = 10;         // Max variation in spacing
    // const waveFrequency = 0.005;  // Speed of the wave oscillation
    // const maxRadius = 960;
    //
    // let offset = 0;              // Outerward shift for all radii
    // let time = 0;
    //
    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    //   offset += growSpeed;
    //   time += waveFrequency;
    //
    //   // Reset to prevent offset from growing forever
    //   if (offset > baseSpacing * 100) offset = 0;
    //
    //   // Simulate compressed/expanded space
    //   let r = offset % baseSpacing;
    //   while (r <= maxRadius) {
    //     const spacing = baseSpacing + Math.sin(time + r * 0.05) * amplitude;
    //
    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    //     ctx.strokeStyle = 'purple';
    //     ctx.lineWidth = 2;
    //     ctx.stroke();
    //     ctx.closePath();
    //
    //     r += spacing; // spacing changes per ring
    //   }
    //
    //   requestAnimationFrame(draw);
    // }
    //
    // draw();
  }
}

customElements.define('canvas-lineanim', CanvasLineanim);

