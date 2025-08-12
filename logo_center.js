export class LogoCenter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .container-logo {
          width: 78px;
          height: 78px;
          position: relative;
        }
        .triangle_1{
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          
          
          /*animation-name: animate-triangle_1;*/
          /*animation-duration: 8s;*/
          /*animation-timing-function: ease-in-out;*/
          /*animation-iteration-count: infinite;*/
        }
        
        @keyframes animate-triangle_1 {
          0% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
          50% {
            transform: translateY(0) translateX(-50%) rotateY(180deg);
          }
          100% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
        }
        .triangle_2{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          
          /*animation-name: animate-triangle_2;*/
          /*animation-duration: 4s;*/
          /*animation-timing-function: ease-in-out;*/
          /*animation-iteration-count: infinite;*/
        }
        
        @keyframes animate-triangle_2 {
          0% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
          50% {
            transform: translateY(-4px) translateX(-50%) rotateY(180deg);
          }
          100% {
            transform: translateY(0) translateX(-50%) rotateY(0deg);
          }
        }
                
        .triangle_3{
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          
          /*animation-name: animate-triangle_3;*/
          /*animation-duration: 4s;*/
          /*animation-timing-function: ease-in-out;*/
          /*animation-iteration-count: infinite; */
        }
        
        @keyframes animate-triangle_3 {
          0% {
            transform: translateX(0) translateY(-50%) rotateX(0deg);
          }
          50% {
            transform: translateX(8px) translateY(-50%) rotateX(180deg);
          }
          100% {
            transform: translateX(0) translateY(-50%) rotateX(0sdeg);
          }
        }
        
        .triangle_4{
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          
          /*animation-name: animate-triangle_4;*/
          /*animation-duration: 4s;*/
          /*animation-timing-function: ease-in-out;*/
          /*animation-iteration-count: infinite;*/
        }
        
        @keyframes animate-triangle_4 {
          0% {
            transform: translateX(0) translateY(-50%) rotateX(0deg);
          }
          50% {
            transform: translateX(-8px) translateY(-50%) rotateX(180deg);
          }
          100% {
            transform: translateX(0) translateY(-50%) rotateX(0deg);
          }
        }
        
        
        
      </style>
      
      <div class="container-logo">
      
        <svg class="triangle_1" xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
          <path d="M28.5036 2.41497C29.5976 0.227597 32.72 0.227525 33.8139 2.41497L61.6614 58.111C62.6173 60.0228 61.3004 62.262 59.2113 62.4003L59.0067 62.407H53.0684H3.31073L3.10616 62.4003C1.01688 62.2622 -0.299859 60.0228 0.656086 58.111L28.5036 2.41497ZM16.518 51.276H45.7994L31.1582 21.9946L16.518 51.276Z" fill="white"/>
        </svg>
        
<!--        <svg class="triangle_2" xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">-->
<!--          <path d="M28.5037 60.1339C29.5976 62.3212 32.72 62.3213 33.8139 60.1339L61.6614 4.43787C62.6174 2.52607 61.3005 0.286842 59.2114 0.148567L59.0068 0.141876V1.12076C60.4855 1.12098 61.4471 2.67743 60.7858 4.00005L32.9383 59.696C32.2051 61.162 30.1125 61.1619 29.3793 59.696L1.53181 4.00005C0.870459 2.67735 1.832 1.12079 3.31082 1.12076V0.141876L3.10625 0.148567C1.08453 0.282197 -0.214163 2.38339 0.570136 4.25146L0.65617 4.43787L28.5037 60.1339ZM59.0068 1.12076V0.141876H3.31082V1.12076H59.0068Z" fill="white"/>-->
<!--        </svg>-->
<!--        -->
<!--        <svg class="triangle_3" xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">-->
<!--          <path d="M1.79974 29.1201C-0.387639 30.2141 -0.38771 33.3365 1.79974 34.4304L57.4957 62.2779C59.4075 63.2338 61.6468 61.917 61.785 59.8278L61.7917 59.6233L60.8128 59.6233C60.8126 61.1019 59.2562 62.0636 57.9335 61.4023L2.23756 33.5547C0.771591 32.8216 0.77167 30.729 2.23756 29.9958L57.9335 2.14827C59.2562 1.48692 60.8128 2.44846 60.8128 3.92728L61.7917 3.92728L61.785 3.7227C61.6514 1.70099 59.5502 0.402294 57.6821 1.18659L57.4957 1.27263L1.79974 29.1201ZM60.8128 59.6233L61.7917 59.6233L61.7917 3.92728L60.8128 3.92728L60.8128 59.6233Z" fill="white"/>-->
<!--        </svg>-->
<!--        -->
<!--        <svg class="triangle_4" xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">-->
<!--          <path d="M60.5186 29.1201C62.706 30.2141 62.7061 33.3365 60.5186 34.4304L4.82264 62.2779C2.91083 63.2338 0.671605 61.9169 0.53333 59.8278L0.526639 59.6233L1.50552 59.6233C1.50575 61.1019 3.0622 62.0636 4.38482 61.4023L60.0808 33.5547C61.5468 32.8216 61.5467 30.729 60.0808 29.9958L4.38482 2.14826C3.06211 1.48691 1.50555 2.44845 1.50552 3.92727L0.526642 3.92727L0.533333 3.7227C0.666962 1.70098 2.76816 0.402289 4.63623 1.18659L4.82264 1.27262L60.5186 29.1201ZM1.50552 59.6233L0.526639 59.6233L0.526642 3.92727L1.50552 3.92727L1.50552 59.6233Z" fill="white"/>-->
<!--        </svg>-->
                        
      </div>

    `;
  }

}

customElements.define('logo-center', LogoCenter);

