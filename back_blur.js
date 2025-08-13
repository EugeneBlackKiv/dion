export class BackBlur extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
      <style>
        .container{
          position: relative;
        }

        .blur_light{
          position: absolute; 
          top: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          width: 686px;
          height: 686px;
          border-radius: 343px;
          background: var(--primary-primary, #805BFF);
          filter: blur(340px); 

        }
        
        .semi_5{
          animation: rotate-s5 24s linear infinite;

        }
        
        @keyframes rotate-s5 {
          0% {
            transform: translate(-50%, 80%);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, 50%);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 20%);
            opacity: 0;
          }
        }
        
        .semi_6{
          animation: rotate-s6 24s linear infinite;

        }
        
        @keyframes rotate-s6 {
          0% {
            transform: translate(-50%, 20%);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, 50%);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, 20%);
            opacity: 1;
          }
        }
      </style>
      
      <div class="container">
      <div class="blur_light"></div>

      </div> 
    `;
  }

  connectedCallback() {

  }
}

customElements.define('back-blur', BackBlur);

