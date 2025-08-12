export class LocatorCSS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>

      .positionare_circle {
        opacity: 0.8;
          animation: rotate-center 24s linear infinite;
        }
        
        @keyframes rotate-center {
          0% {
            transform: rotate(-90deg);
          }
          100% {
            transform: rotate(90deg);
          }
        }
      </style>
      
<!--      <svg class="positionare_circle" width="1920" height="1920" viewBox="0 0 1920 1920" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--      <path d="M960 0.000202178C866.997 0.000206243 774.488 13.5147 685.372 40.1202L960 960L960 0.000202178Z" fill="url(#paint0_linear_536_106780)"/>-->
<!--      <defs>-->
<!--      <linearGradient id="paint0_linear_536_106780" x1="733" y1="163.5" x2="993" y2="81.0002" gradientUnits="userSpaceOnUse">-->
<!--      <stop stop-color="#808080" stop-opacity="0"/>-->
<!--      <stop offset="1" stop-color="#808080"/>-->
<!--      </linearGradient>-->
<!--      </defs>-->
<!--      </svg>  -->
      
      <svg class="positionare_circle" width="1920" height="1920" viewBox="0 0 1920 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M960 -4.19629e-05C866.997 -3.78976e-05 774.488 13.5145 685.372 40.1199L960 960L960 -4.19629e-05Z" fill="url(#paint0_linear_546_40452)"/>
        <defs>
        <linearGradient id="paint0_linear_546_40452" x1="733" y1="163.5" x2="993" y2="80.9999" gradientUnits="userSpaceOnUse">
        <stop stop-color="var(--surface-surface, #1E1E1E)" stop-opacity="0"/>
        <stop offset="1" stop-color="var(--surface-surface, #1E1E1E)"/>
        </linearGradient>
        </defs>
      </svg>
    `;
  }

  connectedCallback() {
    // const dropdown = this.shadowRoot.querySelector('.StyleClassName');
  }
}

customElements.define('locator-css', LocatorCSS);

