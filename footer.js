export class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .sec_footer{
          margin-top: 180px;
          display: flex;
          padding: 48px 16px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          
          border-top: 1px solid var(--outline-outline-variant, #393939);
        }
      </style>

      <div class="sec_footer">
      
      
        <!--Introducem continutul-->
      </div> 
    `;
  }

  connectedCallback() {
    // const dropdown = this.shadowRoot.querySelector('.StyleClassName');
  }
}

customElements.define('footer-section', FooterSection);

