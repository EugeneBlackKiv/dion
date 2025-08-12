export class MainTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .titlul_principal {
        color: var(--surface-on-surface, #000);
  
        /* h3/sec */
        font-family: var(--family-heading-primary, Jost);
        font-size: var(--size-heading-h3, 40px);
        font-style: normal;
        font-weight: var(--weight-heading-secondary, 500);
        line-height: var(--line-height-heading-h3, 48px); /* 120% */
      }
      
      .subtitlul_principal {
        color: var(--surface-on-surface, #000);

        /* s1/prim */
        font-family: var(--family-subtitle-primary, Jost);
        font-size: var(--size-subtitle-s1, 20px);
        font-style: normal;
        font-weight: var(--weight-subtitle-primary, 400);
        line-height: var(--line-height-subtitle-s1, 24px); /* 120% */
      }
      
      .sectiunea_titluri{
        margin-top: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;
      }
        
      </style>

      <div class="sectiunea_titluri">
      
        <div class="titlul_principal">
          Let Al Broker Search Flight for You 
        </div>
        
        <div class="subtitlul_principal">
          Tell us where and when - Weill search the whole market for you
        </div>

      </div>
    `;
  }

}

customElements.define('main-title', MainTitle);

