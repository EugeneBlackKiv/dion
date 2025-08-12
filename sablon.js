export class NameClass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        <!-- Aici se introduc stilurile -->
      </style>

      <div>
      
      
        <!--Introducem continutul-->
      </div> 
    `;
  }

  connectedCallback() {
    // const dropdown = this.shadowRoot.querySelector('.StyleClassName');
  }
}

customElements.define('html-name_element', NameClass);

