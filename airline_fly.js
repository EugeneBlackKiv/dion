import './back_blur.js'

export class AirlineFly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .airline_fly_section{
          display: flex;
          height: 246px;
          position: relative;
          z-index: -10;
          /*border: 1px solid var(--outline-outline, #C6C6CD);*/
        }
        .background_positioning{
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          margin-top: -248px;
        }
        .container_avion_1{
          position: absolute;
          left: 50%;
          top: -140px;
          transform: translateX(-50%) ;          
        }
        .avion_1 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 40s infinite linear;
          animation-delay: -10s;
        }
        .container_avion_2{
          position: absolute;
          left: 50%;
          top: -200px;
          transform: translateX(-50%) ; 
        }        
        .avion_2 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 60s infinite linear;
          animation-delay: -10s;
        }
        .container_avion_3{
          position: absolute;
          left: 50%;
          top: -200px;
          transform: translateX(-50%) ; 
        }      
        .avion_3 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 50s infinite linear;
          animation-delay: -16s;
        }
        .container_avion_4{
          position: absolute;
          left: 50%;
          top: -130px;
          transform: translateX(-50%) ; 
        }
        .avion_4 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 40s infinite linear;
          animation-delay: -30s;
        }
        .container_avion_5{
          position: absolute;
          left: 50%;
          top: -80px;
          transform: translateX(-50%) ; 
        }        
        .avion_5{
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 60s infinite linear;
          animation-delay: -48s;
        }
        
        .container_avion_6{
          position: absolute;
          left: 50%;
          top: 20px;
          transform: translateX(-50%) ; 
        }
        .avion_6 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 32s infinite linear;
          animation-delay: -16s;
        }
        
        .container_avion_7{
          position: absolute;
          left: 50%;
          top: 100px;
          transform: translateX(-50%) ; 
        }      
        .avion_7 {
          position: absolute;
          left: -844px;
          offset-path: path("M1.08887 503C163.721 203.967 480.658 1 845 1C1209.34 1 1526.28 203.967 1688.91 503");
          offset-rotate: auto;
          animation: move 50s infinite linear;
          animation-delay: -10s;
        }
        
        .plane_color{
          fill: var(--surface-surface);
        }
        
        .back_line_color{
          stroke: var(--outline-outline-variant, #E7E7EE);
        }
        
        @keyframes move {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        
        
      </style>

      <div class="airline_fly_section">
<!--        <canvas-line class="background_positioning"></canvas-line>-->
<!--        <canvas-lineanim class="background_positioning"></canvas-lineanim>-->
        <back-blur class="background_positioning"></back-blur>

        <div class="container_avion_1">
          <svg class="avion_1" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="red">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_2">
          <svg class="avion_2" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_3">
          <svg class="avion_3" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_4">
          <svg class="avion_4" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="none">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_5">
          <svg class="avion_5" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_6">
          <svg class="avion_6" xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="none">
            <path class="plane_color" d="M19.7767 51.706L15.8213 51.706L22.4136 29.9351L7.91067 28.5744L2.63689 36.7385H9.7504e-07L2.63689 25.853L0 14.9675H2.63689L7.91067 23.1316L22.4136 21.771L15.8213 3.10882e-07L19.7767 0L32.9611 21.771L40.8718 21.771C43.0604 21.771 54.0563 22.2812 54.0563 25.853C54.0563 29.4248 43.0604 29.9351 40.8718 29.9351L32.9611 29.9351L19.7767 51.706Z" fill="white"/>
          </svg>
        </div>
        
        <div class="container_avion_7">
          <svg class="avion_7" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path class="plane_color" d="M11.4513 29.6661L9.23178 29.6661L12.931 17.4494L4.79272 16.6858L1.83335 21.2671H0.353665L1.83335 15.1587L0.353664 9.05037H1.83335L4.79272 13.6316L12.931 12.8681L9.23178 0.651367L11.4513 0.651367L18.8497 12.8681L23.2888 12.8681C24.5169 12.8681 30.6872 13.1544 30.6872 15.1587C30.6872 17.163 24.5169 17.4494 23.2888 17.4494L18.8497 17.4494L11.4513 29.6661Z" fill="white"/>
          </svg>
        </div>
        
      </div>
      
    `;
  }

  connectedCallback() {
    const inaltimeaZonei = window.innerHeight; //➡️ window.innerHeight captează înălțimea ferestrei. Aceasta este înregistrată în scopuri de depanare.
    // console.log('Inaltimea zonei de vizualizare:', inaltimeaZonei);

    const elementsTrig = this.shadowRoot.querySelector(".airline_fly_section"); //➡️ Găsește elementul .un_patrat în interiorul DOM-ului Shadow. Acesta este elementul pe care doriți să îl animați.

    let rectElem = elementsTrig.getBoundingClientRect(); //getBoundingClientRect() obține poziția elementului în raport cu fereastra de vizualizare.
    let elementDeSus = rectElem.top; //rectElem.top vă spune cât de departe de partea superioară a ferestrei de vizualizare se află elementul.

    // console.log('Unde se afla elementul de sus:', elementDeSus);

    let start = 0; // ➡️start: când începe animația, pe baza poziției verticale a elementului.
    let end = 400;// ➡️end: poziția de defilare hardcoded în care se termină animația.
    let elementNume = ".airline_fly_section";//➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.

    const parametriiAnimatiei = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = progress * (endPoint - startPoint);//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = 1 - (progress * (endPoint - startPoint) * 0.004);//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateY(${marginTop}px)`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateY: ${marginTop} opacity: ${opacitate}`);
    };

    let ticking = false; //➡️ Flag pentru a controla requestAnimationFrame. Împiedică rularea simultană a mai multor cadre de animație, îmbunătățind performanța.

    const monitorScroll = () => { //➡️ Definește funcția de gestionare a evenimentului scroll.
      if (!ticking) { //➡️ Dacă ticking este fals:Programează parametriiAnimatiei să ruleze la următorul cadru de animație. Setează ticking la true, astfel încât să nu se programeze din nou până nu se termină. După execuție, resetează ticking la false.
        window.requestAnimationFrame(() => {
          parametriiAnimatiei(start, end, elementNume);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", monitorScroll); //➡️ Înregistrează ascultătorul de evenimente scroll pe fereastră. Fiecare derulare declanșează monitorScroll().
  }

}

customElements.define('airline-fly', AirlineFly);

