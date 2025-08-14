import './vs_icon.js'

export class WhatUnique extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .vs_componentul{
          margin-top: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 48px;
          align-self: stretch;
          margin-bottom: 280px;
        }
        .title_group{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
        }
        .grupul_antet_vs{
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
          
        }
        .logo_antet{
          display: flex;
          gap: 1px;
          align-items: center;
        }
        .logo_antet_culoare{
        stroke: var(--surface-on-surface, #000);
        }
        
        .vs_title_group{
          display: flex;
          align-items: center;
          gap: 192px;
          
          color: var(--surface-on-surface, #000);

          /* h6/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h6, 28px);
        }
        
        .vs_title_accent{
          color: var(--primary-primary, #805BFF);
  
          /* h6/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h6, 28px); /* 116.667% */
        }
        
        .card_list{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          align-self: stretch;
          position: relative;
        }
        .vs_row{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 36px;
          align-self: stretch;
        }
        .vs_arg{
          display: flex;
          width: 648px;
          align-items: center;
          border-radius: 24px;
          box-shadow: 0 6px 24px 0 var(--shadow-card, #1B1B1B);
        }
        .decor_left{
          width: 32px;
          flex-shrink: 0;
          align-self: stretch;
          
          border-radius: 24px 0 0 24px;
          border-top: 1px solid var(--primary-primary, #805BFF);
          border-bottom: 1px solid var(--primary-primary, #805BFF);
          border-left: 1px solid var(--primary-primary, #805BFF);
          background: var(--surface-surface, #1E1E1E);
        }
        .label_left{
          display: flex;
          padding: 26px 0 26px 8px;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          
          border-radius: 0 24px 24px 0;
          border-top: 1px solid var(--outline-outline-variant, #393939);
          border-right: 1px solid var(--outline-outline-variant, #393939);
          border-bottom: 1px solid var(--outline-outline-variant, #393939);
          background: var(--surface-surface, #1E1E1E);
          
          color: var(--surface-on-surface, #FFF);

          /* h6/prim */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-primary, 400);
          line-height: var(--line-height-heading-h6, 28px); /* 116.667% */
        }

        .vs_arg_right{
          justify-content: flex-end;
        }
        .decor_right{
          width: 32px;
          flex-shrink: 0;
          align-self: stretch;
          
          border-radius: 0 24px 24px 0;
          border-top: 1px solid var(--primary-primary, #805BFF);
          border-right: 1px solid var(--primary-primary, #805BFF);
          border-bottom: 1px solid var(--primary-primary, #805BFF);
          background: var(--surface-surface, #1E1E1E);
        }
        .label_right{
          display: flex;
          padding: 26px 8px 26px 0;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          flex: 1 0 0;
          
          border-radius: 24px 0 0 24px;
          border-top: 1px solid var(--outline-outline-variant, #393939);
          border-bottom: 1px solid var(--outline-outline-variant, #393939);
          border-left: 1px solid var(--outline-outline-variant, #393939);
          background: var(--surface-surface, #1E1E1E);
          
          color: var(--surface-on-surface, #FFF);
          text-align: right;
          
          /* h6/prim */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-primary, 400);
          line-height: var(--line-height-heading-h6, 28px); /* 116.667% */
        }
        .fundal{
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%, -50%);
           z-index: -1;
        }
        
      </style>
      <div class="vs_componentul">
        <div class="title_group">
          <div class="grupul_antet_vs">
            <div>
            What Makes
            </div>
            <div class="logo_antet">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path class="logo_antet_culoare" d="M24.7461 26.0439H3.39746L14.0713 4.69531L24.7461 26.0439Z" stroke="black" stroke-width="4.6"/>
            </svg>
            ion
            </div>
            <div>
            Unique
            </div>
          </div> 
          <div class="vs_title_group">
            <div>
              <span class="vs_title_accent">Old Way</span>  manual search
            </div>
            <div>
              <span class="vs_title_accent">Dion</span> AI Broker Assistant
            </div>
          </div>
        </div>
        <div class="card_list">
          <div class="vs_row">
            <div class="vs_arg vs_arg_right row_1">
              <div class="label_right">
                User sets filters manually
              </div>
              <div class="decor_right"></div>
            </div>
            <vs-unique></vs-unique>
            <div class="vs_arg row_1_left">
              <div class="decor_left"></div>
              <div class="label_left">
                Dion learns from preferences + context
              </div>
            </div>
          </div>
          <div class="vs_row">
            <div class="vs_arg vs_arg_right row_2">
              <div class="label_right">
                User compares results side-by-side
              </div>
              <div class="decor_right"></div>
            </div>
            <vs-unique></vs-unique>
            <div class="vs_arg row_2_left">
              <div class="decor_left"></div>
              <div class="label_left">
                Dion presents a best-fit ranked shortlist
              </div>
            </div>
          </div>
          <div class="vs_row">
            <div class="vs_arg vs_arg_right row_3">
              <div class="label_right">
                No intelligence about travel intent
              </div>
              <div class="decor_right"></div>
            </div>
            <vs-unique></vs-unique>
            <div class="vs_arg row_3_left">
              <div class="decor_left"></div>
              <div class="label_left">
                Dion understands goals like: “arrive early” or “save $”
              </div>
            </div>
          </div>
          <div class="vs_row">
            <div class="vs_arg vs_arg_right row_4">
              <div class="label_right">
                Just static results
              </div>
              <div class="decor_right"></div>
            </div>
            <vs-unique></vs-unique>
            <div class="vs_arg row_4_left">
              <div class="decor_left"></div>
              <div class="label_left">
                Dynamic analysis across multiple data sources
              </div>
            </div>
          </div>
          <div class="vs_row">
            <div class="vs_arg vs_arg_right row_5">
              <div class="label_right">
                Zero transparency on why one is better
              </div>
              <div class="decor_right"></div>
            </div>
            <vs-unique></vs-unique>
            <div class="vs_arg row_5_left">
              <div class="decor_left"></div>
              <div class="label_left">
                Explains recommendations in plain language
              </div>
            </div>
          </div>
          <svg class="fundal" width="1466" height="634" viewBox="0 0 1466 634" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.16" filter="url(#filter0_f_333_9234)">
            <ellipse cx="733" cy="317" rx="585" ry="169" fill="#805BFF"/>
            </g>
            <defs>
            <filter id="filter0_f_333_9234" x="0" y="0" width="1466" height="634" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="74" result="effect1_foregroundBlur_333_9234"/>
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

    const elementsTrig = this.shadowRoot.querySelector(".row_1"); //➡️ Găsește elementul .un_patrat în interiorul DOM-ului Shadow. Acesta este elementul pe care doriți să îl animați.

    let rectElem = elementsTrig.getBoundingClientRect(); //getBoundingClientRect() obține poziția elementului în raport cu fereastra de vizualizare.
    let elementDeSus = rectElem.top; //rectElem.top vă spune cât de departe de partea superioară a ferestrei de vizualizare se află elementul.
    let valoareScrollOutside = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

    // console.log('Unde se afla elementul de sus:', elementDeSus);

    // -----------  -----------

    let start = 1000; // ➡️start: când începe animația, pe baza poziției verticale a elementului.
    let end = 1220;// ➡️end: poziția de defilare hardcoded în care se termină animația.
    let elementNume = ".grupul_antet_vs";//➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.

    let start_sec = 1200;
    let end_sec = 1320;
    let elementNume_sec = ".row_1";

    let start_ter = 1300;
    let end_ter = 1420;
    let elementNume_ter = ".row_2";

    let start_qua = 1400;
    let end_qua = 1520;
    let elementNume_qua = ".row_3";

    let start_qui = 1500;
    let end_qui = 1620;
    let elementNume_qui = ".row_4";

    let start_cin = 1600;
    let end_cin = 1720;
    let elementNume_cin = ".row_5";

    let start_sec_left = 1200;
    let end_sec_left = 1320;
    let elementNume_sec_left = ".row_1_left";

    let start_ter_left = 1300;
    let end_ter_left = 1420;
    let elementNume_ter_left = ".row_2_left";

    let start_qua_left = 1400;
    let end_qua_left = 1520;
    let elementNume_qua_left = ".row_3_left";

    let start_qui_left = 1500;
    let end_qui_left = 1620;
    let elementNume_qui_left = ".row_4_left";

    let start_cin_left = 1600;
    let end_cin_left = 1720;
    let elementNume_cin_left = ".row_5_left";


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

      // console.log(`progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`);

    };

    const parametriiAnimatiei_sec = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = -120 + (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 1.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateX(${marginTop}px)`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateX: ${marginTop} opacity: ${opacitate}`);

    };

    const parametriiAnimatiei_ter = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = 120 - (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 1.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateX(${marginTop}px)`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateX: ${marginTop} opacity: ${opacitate}`);

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
          parametriiAnimatiei_sec(start_cin, end_cin, elementNume_cin);

          parametriiAnimatiei_ter(start_sec_left, end_sec_left, elementNume_sec_left);
          parametriiAnimatiei_ter(start_ter_left, end_ter_left, elementNume_ter_left);
          parametriiAnimatiei_ter(start_qua_left, end_qua_left, elementNume_qua_left);
          parametriiAnimatiei_ter(start_qui_left, end_qui_left, elementNume_qui_left);
          parametriiAnimatiei_ter(start_cin_left, end_cin_left, elementNume_cin_left);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", monitorScroll); //➡️ Înregistrează ascultătorul de evenimente scroll pe fereastră. Fiecare derulare declanșează monitorScroll().
  }
}

customElements.define('what-unique', WhatUnique);

