export class ParallaxTest extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        body{
          margin: auto;
        }
        .un_patrat{
          display: flex;
          width: 50vw;
          height: 50vh;
          background-color: rgb(0, 0, 0);
        }
        
        .spatiu_gol{
          display: flex;
          width: 100vw;
          height: 200vh;
          background-color: rgb(241, 241, 241);
        }

      </style>
      
      <div>
      
        <div class="un_patrat"></div>
        <div class="spatiu_gol"></div>

      
      </div>
    `;
  }

  connectedCallback() {
    const inaltimeaZonei = window.innerHeight; //➡️ window.innerHeight captează înălțimea ferestrei. Aceasta este înregistrată în scopuri de depanare.
    console.log('Inaltimea zonei de vizualizare:', inaltimeaZonei);

    const elementsTrig = this.shadowRoot.querySelector(".un_patrat"); //➡️ Găsește elementul .un_patrat în interiorul DOM-ului Shadow. Acesta este elementul pe care doriți să îl animați.

    let rectElem = elementsTrig.getBoundingClientRect(); //getBoundingClientRect() obține poziția elementului în raport cu fereastra de vizualizare.
    let elementDeSus = rectElem.top; //rectElem.top vă spune cât de departe de partea superioară a ferestrei de vizualizare se află elementul.

    console.log('Unde se afla elementul de sus:', elementDeSus);

    let start = elementDeSus; // ➡️start: când începe animația, pe baza poziției verticale a elementului.
    let end = 800;// ➡️end: poziția de defilare hardcoded în care se termină animația.
    let elementNume = ".un_patrat";//➡️ elementNume: Selector CSS pentru elementul care urmează să fie animat.

    const parametriiAnimatiei = (startPoint, endPoint, className) => { //➡️ Declară o funcție săgeată, astfel încât aceasta să rămână legată de instanța elementului personalizat.
      const elementPornire = this.shadowRoot.querySelector(className); //➡️ Selectează elementul țintă din nou în Shadow DOM pe baza numelui clasei furnizate.
      let valoareScroll = window.scrollY; //➡️ Obține poziția curentă de derulare a paginii.

      if (valoareScroll < startPoint) valoareScroll = startPoint; //➡️ Normalizează valoareaScroll astfel încât să fie fixată între startPoint și endPoint. Previne valorile din afara intervalului de animație.
      if (valoareScroll > endPoint) valoareScroll = endPoint;

      let progress = (valoareScroll - startPoint) / (endPoint - startPoint); //➡️ Calculează distanța de derulare între punctele de început și de sfârșit ca valoare între 0 și 1.
      let marginTop = progress * (endPoint - startPoint);//➡️ Convertește progresul într-o valoare pixel. Această valoare este cât de mult doriți să deplasați elementul pe verticală.

      elementPornire.style.marginTop = `${marginTop}px`; //➡️ Setează marja calculată pe element pentru a crea efectul de animație.

      console.log(`progress: ${progress}, marginTop: ${marginTop}`);
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

customElements.define('parallax-test', ParallaxTest);

