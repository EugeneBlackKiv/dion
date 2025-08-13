import './cyclical.js'

export class StatisticDate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .container_section{
          position: relative;
        }
        .statist{
          display: inline-flex;
          padding: 24px 48px;
          justify-content: center;
          align-items: baseline;
          gap: 6px;
          
          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--blur-1, rgba(30, 30, 30, 0.24));
          box-shadow: 0 6px 12px 0 var(--shadow-card, #1B1B1B);
          backdrop-filter: blur(8px);
        }
        
        .valoare{
          color: var(--surface-on-surface, #FFF);
  
          /* h3/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h3, 40px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h3, 48px); /* 120% */
        }
        
        .curen{
          color: var(--primary-primary, #805BFF);

          /* h5/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h5, 28px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h5, 32px);
          margin-left: 0.25em;
        }
        .stat_prim{
          position: absolute;
          top: 6%;
          left: 59%;
          z-index: 10;
        }
        
        .stat_sec{
          position: absolute;
          top: 58%;
          left: 21.5%;
          z-index: 10;
        }
        
        .stat_ter{
          position: absolute;
          top: 85%;
          left: 56%;
          z-index: 10;
        }
        .punct{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.5);
        }
      </style>
      

      <div class="container_section">
<!--        <div class="punct"></div>-->
        <svg class="punct" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#805BFF"/>
        </svg>
        <div class="statist stat_prim">
          <div class="valoare">120</div>
          <div class="curen">sources</div>
        </div>
        <div class="statist stat_sec">
          <div class="valoare">16 000</div>
          <div class="curen">users</div>
        </div>
        <div class="statist stat_ter">
          <div class="valoare">2100</div>
          <div class="curen">offers/day</div>
        </div>
        <cyclical-anim></cyclical-anim>
      </div> 
    `;
  }

  connectedCallback() {
    const inaltimeaZonei = window.innerHeight; //➡️ window.innerHeight captează înălțimea ferestrei. Aceasta este înregistrată în scopuri de depanare.
    // console.log('Inaltimea zonei de vizualizare:', inaltimeaZonei);

    // ----------- Indentificarea pozitii elementului -----------

    const elementsTrig = this.shadowRoot.querySelector(".punct"); //➡️ Găsește elementul .un_patrat în interiorul DOM-ului Shadow. Acesta este elementul pe care doriți să îl animați.

    let rectElem = elementsTrig.getBoundingClientRect(); //getBoundingClientRect() obține poziția elementului în raport cu fereastra de vizualizare.
    let elementDeSus = rectElem.top; //rectElem.top vă spune cât de departe de partea superioară a ferestrei de vizualizare se află elementul.
    let valoareScrollOutside = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

    // console.log('Unde se afla elementul de sus:', elementDeSus);

    // -----------  -----------

    let start = 2300; // ➡️start: când începe animația, pe baza poziției verticale a elementului.
    let end = 2520;// ➡️end: poziția de defilare hardcoded în care se termină animația.
    let elementNume = ".stat_prim";//➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.

    let start_sec = 2400;
    let end_sec = 2620;
    let elementNume_sec = ".stat_sec";

    let start_ter = 2500;
    let end_ter = 2720;
    let elementNume_ter = ".stat_ter";

    let start_point = 1700;
    let end_point = 2400;
    let elementNume_point = ".punct";


    const parametriiAnimatiei = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = -220 + (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 2.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateX(${marginTop}px) scale(${opacitate})`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`);

    };

    const parametriiAnimatieiSec = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = 220 - (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = (progress * (endPoint - startPoint) * 0.01) / 2.2;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translateX(${marginTop}px) scale(${opacitate})`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`);

    };

    const parametriiAnimatieiPoint = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = -716 + (progress * (endPoint - startPoint));//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let scale = (progress * (endPoint - startPoint) * 0.01) / 2.4;//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.
      let opacitate = 3-((progress * (endPoint - startPoint) * 0.01) / 2.4);//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      // elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.
      elementPornire.style.transform = `translate(-50%, ${marginTop}px)  scale(${scale})`;
      elementPornire.style.opacity = opacitate;

      // console.log(`progress: ${progress}, translateY: ${marginTop}, opacitate: ${opacitate}`);

    };


    let ticking = false; //➡️ Flag pentru a controla requestAnimationFrame. Împiedică rularea simultană a mai multor cadre de animație, îmbunătățind performanța.

    const monitorScroll = () => { //➡️ Definește funcția de gestionare a evenimentului scroll.
      if (!ticking) { //➡️ Dacă ticking este fals:Programează parametriiAnimatiei să ruleze la următorul cadru de animație. Setează ticking la true, astfel încât să nu se programeze din nou până nu se termină. După execuție, resetează ticking la false.
        window.requestAnimationFrame(() => {
          parametriiAnimatiei(start, end, elementNume);
          parametriiAnimatieiSec(start_sec, end_sec, elementNume_sec);
          parametriiAnimatiei(start_ter, end_ter, elementNume_ter);
          parametriiAnimatieiPoint(start_point, end_point, elementNume_point);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", monitorScroll); //➡️ Înregistrează ascultătorul de evenimente scroll pe fereastră. Fiecare derulare declanșează monitorScroll().
  }
}

customElements.define('statistic-date', StatisticDate);

