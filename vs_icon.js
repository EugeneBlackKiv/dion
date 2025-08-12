export class VsUnique extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .icon_animation{
          /*position: absolute;*/
          /*left: 50%;*/
          /*top: 50%;*/
          /*transform: translate(-50%, -50%);*/
          animation-name: animate_icon;
          animation-duration: 2s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        @keyframes animate_icon {
          0% {
             opacity: 0.08;
          }
          50% {
             opacity: 0.32;
          }
          100% {
             opacity: 0.08;
          }
        }
        
      </style>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="60" viewBox="0 0 59 60" fill="none">
        <circle cx="17.3345" cy="17.3345" r="16.5345" transform="matrix(0.706978 0.707236 -0.706978 0.707236 29.9845 5.47998)" fill="#805BFF" stroke="#805BFF" stroke-width="1.6"/>
        <circle class="icon_animation" opacity="0.24" cx="25.472" cy="25.472" r="25.472" transform="matrix(0.706978 0.707236 -0.706978 0.707236 29.9844 -6.03076)" fill="#805BFF"/>
        <path d="M58.7087 2.68309C59.0992 2.29261 59.0994 1.65933 58.7091 1.26862C58.3188 0.877901 57.6857 0.877706 57.2951 1.26818L58.7087 2.68309ZM58.0019 1.97563L57.2951 1.26818L41.2931 17.2662L41.9999 17.9736L42.7067 18.6811L58.7087 2.68309L58.0019 1.97563Z" fill="#805BFF"/>
        <path d="M1.26212 57.3173C0.871599 57.7078 0.871484 58.3411 1.26187 58.7318C1.65225 59.1224 2.2853 59.1225 2.67582 58.732L1.26212 57.3173ZM17.9936 42L17.2868 41.2926L1.26212 57.3173L1.96897 58.0246L2.67582 58.732L18.7005 42.7074L17.9936 42Z" fill="#805BFF"/>
        <path d="M19.7471 23.8604L24.1444 37.5458C24.2039 37.7309 24.4658 37.7309 24.5252 37.5458L28.9225 23.8604" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M40.1369 27.1553V27.1553C40.1369 25.3355 38.6617 23.8604 36.842 23.8604H35.276C33.4562 23.8604 31.981 25.3355 31.981 27.1553V27.1553C31.981 28.975 33.4562 30.4502 35.276 30.4502H36.2928C38.4159 30.4502 40.1369 32.1713 40.1369 34.2943V34.2943C40.1369 36.4173 38.4159 38.1384 36.2928 38.1384H35.8251C33.7021 38.1384 31.981 36.4173 31.981 34.2943V34.2943" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>

    `;
  }

}

customElements.define('vs-unique', VsUnique);

