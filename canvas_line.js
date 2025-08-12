import './animatie_locator_css.js'

export class CanvasLine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .indentificare_container{
          opacity: var(--opa-back);
        }
        .position_locator{
          position: absolute; 
          /*opacity: var(--opa-back);*/ 
          z-index: 10;
        }

      </style>
      
      <div>
        <locator-css class="position_locator"></locator-css>
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
    canvas.style.height = '474px';

    // Setează dimensiunea reală a pixelilor pânzei
    canvas.width = 1920 * dpr;
    canvas.height = 474 * dpr;

    // Scalați contextul pentru a ține cont de raportul pixelilor
    ctx.scale(dpr, dpr);

    for (let i = 0; i < 122; i++) {
      ctx.beginPath();
      ctx.arc(960, 960 + (i * 4), 960, 0, Math.PI * 2);
      ctx.lineWidth = 1; // Grosimea linii
      ctx.strokeStyle = '#808080';
      ctx.stroke();
      ctx.closePath();
    }
  }
}

customElements.define('canvas-line', CanvasLine);

