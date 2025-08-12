import './logo_center.js'

export class MainLogoload extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .logo_section{
           margin-top: 72px;
           display: flex;
           justify-content: center;
        }
        .logo{
          display: flex;
          width: 94px;
          height: 94px;
          padding: 5px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          
          border-radius: 999px;
          /*border: 2px solid var(--primary-primary, #805BFF);*/
          /*background: conic-gradient(from 180deg at 50% 50%, var(--primary-primary, #805BFF) 0deg, var(--surface-surface, #1E1E1E) 360deg);*/
          position: relative;
        }
        
        .positionare_imagine{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          border-radius: 80px;
          }
          
        .positionare_video{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          border-radius: 80px;
          width: 94px;
          height: 94px;
        }
        
        .positionare_circle {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transform-origin: center center;
        
          animation: rotate-center 8s linear infinite;
        }
        
        @keyframes rotate-center {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .masca_fundal{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          
          width: 95px;
          height: 95px;
          
          border-radius: 94px;
          background: radial-gradient(91.06% 91.06% at 26.06% 75%, rgba(255, 255, 255, 0.00) 41.58%, #FFF 100%);
        }
        .empty_space{
          height: 280px;
        }

      </style>
      
      <div class="logo_section">
      
        <div class="logo">
          
          <svg class="positionare_circle" width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#paint0_angular_357_9364_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.052 -0.052 0 54 54)"><foreignObject x="-1076.92" y="-1076.92" width="2153.85" height="2153.85"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(128, 91, 255, 0) 0deg,rgba(128, 91, 255, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M54 106V104C26.3858 104 4 81.6142 4 54H2H0C0 83.8234 24.1766 108 54 108V106ZM106 54H104C104 81.6142 81.6142 104 54 104V106V108C83.8234 108 108 83.8234 108 54H106ZM54 2V4C81.6142 4 104 26.3858 104 54H106H108C108 24.1766 83.8234 0 54 0V2ZM54 2V0C24.1766 0 0 24.1766 0 54H2H4C4 26.3858 26.3858 4 54 4V2Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.50196081399917603,&#34;g&#34;:0.35686275362968445,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.50196081399917603,&#34;g&#34;:0.35686275362968445,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.50196081399917603,&#34;g&#34;:0.35686275362968445,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.50196081399917603,&#34;g&#34;:0.35686275362968445,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:6.3681635275637544e-15,&#34;m01&#34;:-104.0,&#34;m02&#34;:106.0,&#34;m10&#34;:104.0,&#34;m11&#34;:6.3681635275637544e-15,&#34;m12&#34;:2.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
            <defs>
            <clipPath id="paint0_angular_357_9364_clip_path"><path d="M54 106V104C26.3858 104 4 81.6142 4 54H2H0C0 83.8234 24.1766 108 54 108V106ZM106 54H104C104 81.6142 81.6142 104 54 104V106V108C83.8234 108 108 83.8234 108 54H106ZM54 2V4C81.6142 4 104 26.3858 104 54H106H108C108 24.1766 83.8234 0 54 0V2ZM54 2V0C24.1766 0 0 24.1766 0 54H2H4C4 26.3858 26.3858 4 54 4V2Z"/></clipPath></defs>
          </svg>


          <logo-center></logo-center>
          <div class="masca_fundal"></div>
<!--          <img class="positionare_imagine" src="./back_logo.png" alt="">-->
          <video class="positionare_video" autoplay muted loop >
            <source src="./video_logo_2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
      
      <div class="empty_space"></div>


    `;
  }

}

customElements.define('main-logoload', MainLogoload);

