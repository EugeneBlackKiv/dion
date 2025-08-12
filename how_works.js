import './forma.js'
import './main_logo.js'
import './dozens_source.js'
import './cyclical.js'
import './flight_cart.js'

export class HowWorks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .componenetul_all{
          display: flex;
          padding: 0px 138px;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          align-self: stretch;
        }
        .grupul_antet{
          display: inline-flex;
          align-items: center;
          gap: 12px;
          
          color: var(--surface-on-surface, #000);

          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 40px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 48px); /* 120% */
          opacity: 0;
          
          /*transform: translateY(-250px);*/
        }
        .logo_antet{
          display: flex;
          gap: 1px;
          align-items: center;
        }
        .logo_antet_culoare{
        stroke: var(--surface-on-surface, #000);
        }
        
        .grupul_carduri{
          display: flex;
          align-items: center;
          gap: 32px;
          align-self: stretch;
          position: relative;
        }
        .card{
          height: 400px;
          flex: 1 0 0;
          
          padding: 40px;
          
          border-radius: 32px;
          border: 1px solid var(--outline-outline-variant, #E7E7EE);
          background: var(--surface-surface-bright, #FFF);
          box-shadow: 0px 6px 24px 0px var(--shadow-card, #F2F2F2);
          position: relative;
          overflow: hidden;
        }
        .sageata_card_1{
          position: absolute;
          top: 94px;
          left: 14px;
          z-index: 3;
        }
        
        .sageata_card_2{
          position: absolute;
          top: 94px;
          left: 234px;
          z-index: 7;
        }
        .search_forma_decor{
          position: absolute;
          transform: scale(0.62) rotate(-12deg);
          top: 54px;
          left: -76px;
          z-index: 2;
          
          animation-name: animate-search_decor_1;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        @keyframes animate-search_decor_1 {
          0% {
             transform: scale(0.62) rotate(-12deg) translateY(0);
          }
          50% {
             transform: scale(0.68) rotate(-8deg) translateX(24px);
          }
          100% {
             transform: scale(0.62) rotate(-12deg) translateX(0);
          }
        }
        .search_forma_decor_2{
          width: 770px;
          height: 354px;
          position: absolute;
          transform: scale(0.62) rotate(-20deg);
          top: 62px;
          left: -104px;
          z-index: 2;

          border-radius: 48px;
          border: 1px solid var(--outline-outline-variant, #393939);
          /*background: var(--surface-surface, #1E1E1E);*/
          background: var(--surface-surface-bright, #282828);
          backdrop-filter: blur(4px);
          box-shadow: 0px 6px 32px 0px var(--surface-surface, #1E1E1E);
        }
        .search_forma_decor_3{
          width: 770px;
          height: 354px;
          position: absolute;
          transform: scale(0.62) rotate(-12deg);
          top: 54px;
          left: -76px;
          border-radius: 48px;
          border: 1px solid var(--outline-outline-variant, #393939);
          /*background: var(--surface-surface, #1E1E1E);*/
          background: var(--surface-surface-bright, #282828);
          backdrop-filter: blur(4px);
          box-shadow: 0px 6px 32px 0px var(--surface-surface, #1E1E1E);
          z-index: 2;
        }
          
        .decor_umbara{
          position: absolute;
          top: 264px;
          left: 169px;
          width: 301px;
          height: 172px;
          transform: rotate(-13.051deg);
          border-radius: 301px;
          opacity: var(--surface-on-surface-opa-senary, 0.24);
          background: var(--primary-primary, #805BFF);
          filter: blur(44px);
        }
        
        .decor_umbara_2{
          position: absolute;
          top: 264px;
          left: -32px;
          width: 204px;
          height: 78px;
          transform: rotate(-18deg);
          border-radius: 301px;
          opacity: var(--surface-on-surface-opa-quinary, 0.4);
          background: var(--primary-primary, #805BFF);
          filter: blur(44px);
          z-index: 5;
        }
        
        .decor_umbara_3{
          position: absolute;
          top: 200px;
          left: -32px;
          width: 204px;
          height: 78px;
          transform: rotate(-18deg);
          border-radius: 301px;
          opacity: var(--surface-on-surface-opa-quinary, 0.4);
          background: var(--primary-primary, #805BFF);
          filter: blur(44px);
          z-index: 3;
        }
        
        .logo_decor{
          position: absolute;
          transform: scale(0.82) ;
          top: 80px;
          left: 196px;
          z-index: 2;
        }
        .source_card_2{
          position: absolute;
          top: 140px;
          left: 38px;
        }
        
        .card_cyclic{
          position: absolute;
          top: -108px;
          left: -92px;
          transform: scale(0.8);
          z-index: -1;
        }
        .titlu_card{
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
        }
        .numarul_card{
          color: var(--surface-on-surface, #000);
  
          /* h4/ter */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h4, 32px);
          font-style: normal;
          font-weight: var(--weight-heading-tertiary, 700);
          line-height: var(--line-height-heading-h4, 40px); /* 125% */
        }
        .check_card{
          color: var(--tertiary-tertiary, #62AB03);
  
          /* h4/ter */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h4, 32px);
          font-style: normal;
          font-weight: var(--weight-heading-tertiary, 700);
          line-height: var(--line-height-heading-h4, 40px); /* 125% */
        }
        .titlu_text{
          color: var(--surface-on-surface, #000);
  
          /* s1/prim */
          font-family: var(--family-subtitle-primary, Jost);
          font-size: var(--size-subtitle-s1, 20px);
          font-style: normal;
          font-weight: var(--weight-subtitle-primary, 400);
          line-height: var(--line-height-subtitle-s1, 24px); /* 120% */
        }
        .back_light{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        
        .flight_cart_decor{
          position: absolute;
          transform: scale(0.56) rotate(-13deg);
          transform-origin: 50% 50%;
          top: 124px;
          left: -356px;
          z-index: 2;
          
          animation-name: flight_decor_1;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        @keyframes flight_decor_1 {
          0% {
             transform: scale(0.56) rotate(-13deg);
          }
          50% {
             transform: scale(0.56) rotate(-8deg);
          }
          100% {
             transform: scale(0.56) rotate(-13deg);
          }
        }
        
        .flight_cart_decor_2{
          position: absolute;
          transform: scale(0.64);
          top: 168px;
          left: -340px;
          z-index: 4;
          
          /*animation-name: animate-search_decor_1;*/
          /*animation-duration: 6s;*/
          /*animation-timing-function: ease-in-out;*/
          /*animation-iteration-count: infinite;*/
        }
        
        .flight_cart_decor_3{
          position: absolute;
          transform: scale(0.72) rotate(13deg);
          top: 238px;
          left: -336px;
          z-index: 6;
          
          animation-name: flight_decor_3;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        @keyframes flight_decor_3 {
          0% {
             transform: scale(0.72) rotate(13deg);
          }
          50% {
             transform: scale(0.72) rotate(8deg);
          }
          100% {
             transform: scale(0.72) rotate(13deg);
          }
        }
        
      </style>

      <div class="componenetul_all">
        <div class="grupul_antet">
          <div>
            How
          </div>
          <div class="logo_antet">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path class="logo_antet_culoare" d="M24.7461 26.0439H3.39746L14.0713 4.69531L24.7461 26.0439Z" stroke="black" stroke-width="4.6"/>
            </svg>
            ion
          </div>
          <div>
            Works
          </div>
        </div>
        
        <div class="grupul_carduri">
        
          <div class="card card_1">
            <div class="titlu_card">
              <div class="numarul_card">
                1.
              </div>
              <div class="titlu_text">
                You tell us your travel need
              </div>
            </div>
            <svg class="sageata_card_1" xmlns="http://www.w3.org/2000/svg" width="125" height="155" viewBox="0 0 125 155" fill="none">
              <path d="M43.6326 1.61505C43.702 1.50322 43.7257 1.36841 43.6972 1.23953C43.6687 1.11065 43.5906 0.998393 43.4799 0.927303C43.3691 0.856212 43.2345 0.831958 43.1055 0.859737C42.9765 0.887509 42.8638 0.965169 42.791 1.07488C41.2347 3.42176 39.7655 5.86396 38.3925 8.37447C11.5944 52.5686 27.4533 118.889 76.7289 140.415C78.6586 141.434 80.5011 142.351 82.4736 143.279C83.1283 143.586 83.9657 143.516 84.969 143.061C85.0757 143.009 85.178 142.96 85.2609 142.907C85.344 142.854 85.4033 142.796 85.4363 142.723C85.4692 142.65 85.4734 142.567 85.4586 142.47C85.4435 142.373 85.4129 142.263 85.381 142.149C85.0647 141.097 84.5955 140.424 83.9565 140.124C82.0314 139.218 80.2344 138.325 78.3536 137.335C30.6905 116.378 14.4986 53.6626 39.4933 8.95677C40.7802 6.43872 42.1627 3.98261 43.6326 1.61505Z" fill="#805BFF"/>
              <path d="M76.0815 124.189C76.0072 124.087 75.8998 124.01 75.7753 123.979C75.6508 123.947 75.5206 123.965 75.4115 124.028C75.3024 124.09 75.222 124.194 75.1863 124.317C75.1506 124.441 75.1635 124.572 75.2147 124.688C75.5117 125.358 75.8121 126.026 76.1157 126.693C78.8344 132.657 81.8195 138.469 85.0709 144.127C84.8028 143.686 84.7995 143.035 85.0655 142.591C85.3096 142.134 85.8697 141.801 86.3858 141.804C79.861 141.929 73.3419 142.362 66.8286 143.101C66.101 143.184 65.3736 143.271 64.6462 143.361C64.5206 143.377 64.401 143.433 64.3138 143.527C64.2266 143.621 64.1789 143.744 64.1812 143.87C64.1836 143.995 64.2358 144.116 64.3265 144.207C64.4172 144.297 64.5388 144.35 64.6649 144.361C65.3951 144.424 66.1253 144.483 66.8554 144.538C73.3918 145.034 79.9225 145.223 86.4474 145.104C87.033 145.107 87.6603 144.734 87.938 144.216C88.2389 143.712 88.2355 142.982 87.9319 142.481C84.6748 136.826 81.1513 131.325 77.3614 125.976C76.9381 125.379 76.5114 124.783 76.0815 124.189Z" fill="#805BFF"/>
            </svg>
            <div class="decor_umbara"></div>
            <div class="search_forma_decor_2"></div>
            <search-form class="search_forma_decor"></search-form>
          </div>
          
<!--          <div class="card card_2">-->
<!--            <div class="titlu_card">-->
<!--              <div class="numarul_card">-->
<!--                2.-->
<!--              </div>-->
<!--              <div class="titlu_text">-->
<!--                We analyze flights from dozens of sources-->
<!--              </div>-->
<!--              -->
<!--              <dozens-sources class="source_card_2"></dozens-sources>-->
<!--            </div>-->
<!--          </div>-->
          <div class="card card_2">
            <div class="titlu_card">
              <div class="numarul_card">
                2.
              </div>
              <div class="titlu_text">
                We analyze flights from dozens of sources
              </div>
              <cyclical-anim class="card_cyclic"></cyclical-anim>
            </div>
          </div>
          
          <div class="card card_3">
            <div class="titlu_card">
              <div class="numarul_card">
                3.
              </div>
              <div class="titlu_text">
                You get a curated shortlist with full transparency
              </div>

              <svg class="sageata_card_2" xmlns="http://www.w3.org/2000/svg" width="128" height="156" viewBox="0 0 128 156" fill="none">
                <path d="M82.1708 2.11339C82.0991 2.00289 82.0728 1.86861 82.0988 1.73932C82.1247 1.61003 82.2006 1.49645 82.31 1.42343C82.4195 1.3504 82.5536 1.32375 82.6832 1.34919C82.8129 1.37463 82.9272 1.4502 83.0021 1.55853C84.6088 3.88112 86.129 6.30076 87.5537 8.79143C115.329 52.6413 100.126 119.248 51.134 141.485C49.2183 142.534 47.3852 143.481 45.424 144.441C44.7729 144.759 43.9325 144.703 42.9193 144.264C42.8117 144.214 42.7084 144.167 42.6246 144.115C42.5404 144.063 42.48 144.006 42.4458 143.934C42.4115 143.862 42.4058 143.779 42.419 143.681C42.4325 143.584 42.4613 143.474 42.4914 143.36C42.791 142.303 43.2504 141.622 43.8861 141.312C45.8007 140.375 47.5891 139.452 49.4568 138.432C96.8623 116.769 112.435 53.7786 86.4635 9.39238C85.1249 6.8929 83.6913 4.45803 82.1708 2.11339Z" fill="#805BFF"/>
                <path d="M51.5032 125.234C51.5759 125.131 51.6822 125.052 51.8064 125.019C51.9306 124.987 52.0614 125.002 52.1717 125.063C52.282 125.125 52.3643 125.227 52.4021 125.35C52.4399 125.472 52.4291 125.604 52.3796 125.72C52.0916 126.395 51.8002 127.069 51.5054 127.741C48.8663 133.755 45.9578 139.619 42.7799 145.334C43.0419 144.89 43.0338 144.237 42.7584 143.797C42.5049 143.344 41.9354 143.021 41.4175 143.033C47.9834 143.04 54.5499 143.353 61.1172 143.973C61.8507 144.042 62.5843 144.115 63.3179 144.192C63.444 144.206 63.565 144.26 63.6544 144.352C63.7438 144.445 63.7941 144.566 63.7944 144.692C63.7947 144.817 63.7449 144.939 63.656 145.031C63.567 145.123 63.4462 145.177 63.3202 145.19C62.587 145.267 61.8537 145.339 61.1205 145.408C54.5561 146.021 47.9909 146.328 41.4251 146.328C40.8374 146.341 40.1996 145.979 39.9113 145.465C39.5998 144.966 39.5903 144.235 39.887 143.73C43.0705 138.018 46.5234 132.456 50.2458 127.042C50.6615 126.438 51.0807 125.835 51.5032 125.234Z" fill="#805BFF"/>
              </svg>
            
            <flight-cart class="flight_cart_decor"></flight-cart>
            <div class="decor_umbara_3"></div>
            <flight-cart class="flight_cart_decor_2"></flight-cart>
            <div class="decor_umbara_2"></div>
            <flight-cart class="flight_cart_decor_3"></flight-cart>
            </div>
          </div>
          
          <div class="card card_4">
            <div class="titlu_card">
              <div class="check_card">
                ✓
              </div>
              <div class="titlu_text">
                Best value. <br>
                No surprises. <br>
                Smart, explainable picks.
              </div>
              <svg class="sageata_card_1" xmlns="http://www.w3.org/2000/svg" width="125" height="155" viewBox="0 0 125 155" fill="none">
                <path d="M43.6326 1.61505C43.702 1.50322 43.7257 1.36841 43.6972 1.23953C43.6687 1.11065 43.5906 0.998393 43.4799 0.927303C43.3691 0.856212 43.2345 0.831958 43.1055 0.859737C42.9765 0.887509 42.8638 0.965169 42.791 1.07488C41.2347 3.42176 39.7655 5.86396 38.3925 8.37447C11.5944 52.5686 27.4533 118.889 76.7289 140.415C78.6586 141.434 80.5011 142.351 82.4736 143.279C83.1283 143.586 83.9657 143.516 84.969 143.061C85.0757 143.009 85.178 142.96 85.2609 142.907C85.344 142.854 85.4033 142.796 85.4363 142.723C85.4692 142.65 85.4734 142.567 85.4586 142.47C85.4435 142.373 85.4129 142.263 85.381 142.149C85.0647 141.097 84.5955 140.424 83.9565 140.124C82.0314 139.218 80.2344 138.325 78.3536 137.335C30.6905 116.378 14.4986 53.6626 39.4933 8.95677C40.7802 6.43872 42.1627 3.98261 43.6326 1.61505Z" fill="#805BFF"/>
                <path d="M76.0815 124.189C76.0072 124.087 75.8998 124.01 75.7753 123.979C75.6508 123.947 75.5206 123.965 75.4115 124.028C75.3024 124.09 75.222 124.194 75.1863 124.317C75.1506 124.441 75.1635 124.572 75.2147 124.688C75.5117 125.358 75.8121 126.026 76.1157 126.693C78.8344 132.657 81.8195 138.469 85.0709 144.127C84.8028 143.686 84.7995 143.035 85.0655 142.591C85.3096 142.134 85.8697 141.801 86.3858 141.804C79.861 141.929 73.3419 142.362 66.8286 143.101C66.101 143.184 65.3736 143.271 64.6462 143.361C64.5206 143.377 64.401 143.433 64.3138 143.527C64.2266 143.621 64.1789 143.744 64.1812 143.87C64.1836 143.995 64.2358 144.116 64.3265 144.207C64.4172 144.297 64.5388 144.35 64.6649 144.361C65.3951 144.424 66.1253 144.483 66.8554 144.538C73.3918 145.034 79.9225 145.223 86.4474 145.104C87.033 145.107 87.6603 144.734 87.938 144.216C88.2389 143.712 88.2355 142.982 87.9319 142.481C84.6748 136.826 81.1513 131.325 77.3614 125.976C76.9381 125.379 76.5114 124.783 76.0815 124.189Z" fill="#805BFF"/>
              </svg>
            <div class="decor_umbara"></div>
            <div class="search_forma_decor_2"></div>
            <div class="search_forma_decor_3"></div>
            </div>
            
          </div>
          
          <svg class="back_light" width="1410" height="529" viewBox="0 0 1410 529" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.16" filter="url(#filter0_f_293_9182)">
            <ellipse cx="705" cy="289" rx="585" ry="169" fill="#805BFF"/>
            </g>
            <defs>
            <filter id="filter0_f_293_9182" x="0" y="0" width="1410" height="578" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_293_9182"/>
            </filter>
            </defs>
          </svg> 
          
        </div>
      
      </div> 
    `;
  }

  connectedCallback() {
    const inaltimeaZonei = window.innerHeight; //➡️ window.innerHeight captează înălțimea ferestrei. Aceasta este înregistrată în scopuri de depanare.
    // console.log('Inaltimea zonei de vizualizare:', inaltimeaZonei);

    // ----------- Indentificarea pozitii elementului -----------

    const elementsTrig = this.shadowRoot.querySelector(".grupul_carduri"); //➡️ Găsește elementul .un_patrat în interiorul DOM-ului Shadow. Acesta este elementul pe care doriți să îl animați.

    let rectElem = elementsTrig.getBoundingClientRect(); //getBoundingClientRect() obține poziția elementului în raport cu fereastra de vizualizare.
    let elementDeSus = rectElem.top; //rectElem.top vă spune cât de departe de partea superioară a ferestrei de vizualizare se află elementul.
    let valoareScrollOutside = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

    // console.log('Unde se afla elementul de sus:', elementDeSus);

    // -----------  -----------

    let start = 100; // ➡️start: când începe animația, pe baza poziției verticale a elementului.
    let end = 320;// ➡️end: poziția de defilare hardcoded în care se termină animația.
    let elementNume = ".grupul_antet";//➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.

    let start_sec = 400;
    let end_sec = 520;
    let elementNume_sec = ".card_1";

    let start_ter = 440;
    let end_ter = 560;
    let elementNume_ter = ".card_2";

    let start_qua = 480;
    let end_qua = 600;
    let elementNume_qua = ".card_3";

    let start_qui = 520;
    let end_qui = 640;
    let elementNume_qui = ".card_4";


    const parametriiAnimatiei = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = -220 + (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 2.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateY(${marginTop}px)`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, opacitate: ${opacitate}`);

    };

    const parametriiAnimatiei_sec = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = 120 - (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 1.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

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
          parametriiAnimatiei_sec(start_sec, end_sec, elementNume_sec);
          parametriiAnimatiei_sec(start_ter, end_ter, elementNume_ter);
          parametriiAnimatiei_sec(start_qua, end_qua, elementNume_qua);
          parametriiAnimatiei_sec(start_qui, end_qui, elementNume_qui);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", monitorScroll); //➡️ Înregistrează ascultătorul de evenimente scroll pe fereastră. Fiecare derulare declanșează monitorScroll().
  }
}

customElements.define('how-works', HowWorks);

