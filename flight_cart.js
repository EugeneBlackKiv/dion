export class FlightCart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: flex;
          width: 768px;
          align-items: center;
          
          border-radius: 16px;
          border: 1px solid var(--outline-outline-variant, #393939);
          background: var(--surface-surface-container-lowest, #282828);
          box-shadow: 0 6px 12px 0 var(--shadow-card, #1B1B1B);
        }
        .content{
          display: flex;
          width: 500px;
          min-width: 488px;
          padding: 16px 24px;
          flex-direction: column;
          align-items: flex-start;
          flex-shrink: 0;
          border-radius: 16px 0 0 16px;
          border-right: 1px solid var(--outline-outline-variant, #393939);
        }
        .content_flight{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          align-self: stretch;
        }
        .leg{
          display: flex;
          min-width: 444px;
          padding: 16px 0;
          align-items: center;
          align-self: stretch;
        }
        .airline_emblem_container{
          display: flex;
          min-width: 32px;
          min-height: 40px;
          padding-right: 8px;
          align-items: center;
        }
        .flight_details_container{
          display: flex;
          min-width: 200px;
          max-width: 300px;
          padding: 0 16px 0 4px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          flex: 1 0 0;
        }
        .time{
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .depart_time_cont{
          display: flex;
          align-items: flex-end;
          gap: 2px;
          
          color: var(--surface-on-surface, #FFF);

          /* bu1/sec */
          font-family: var(--family-button-primary, Jost);
          font-size: var(--size-button-bu1, 16px);
          font-style: normal;
          font-weight: var(--weight-button-secondary, 500);
          line-height: var(--line-height-button-bu1, 20px); /* 125% */
        }
        .origin_destination{
          display: flex;
          align-items: center;
          gap: 4px;
          
          overflow: hidden;
          color: var(--surface-on-surface, #FFF);
          text-overflow: ellipsis;
          
          /* b2/prim */
          font-family: var(--family-body-primary, Jost);
          font-size: var(--size-body-b2, 14px);
          font-style: normal;
          font-weight: var(--weight-body-primary, 400);
          line-height: var(--line-height-body-b2, 16px); /* 114.286% */
        }
        .duration_container{
          display: flex;
          min-width: 96px;
          min-height: 40px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          
          color: var(--surface-on-surface, #FFF);
          text-align: right;
          
          /* bu2/prim */
          font-family: var(--family-button-primary, Jost);
          font-size: var(--size-button-bu2, 14px);
          font-style: normal;
          font-weight: var(--weight-button-primary, 400);
          line-height: var(--line-height-button-bu2, 16px); /* 114.286% */
        }
        .parts{
          display: flex;
          width: 100px;
          min-width: 88px;
          max-width: 120px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .parts_stop{
          color: var(--surface-on-surface, #FFF);
          text-align: right;
          
          /* bu2/prim */
          font-family: var(--family-button-primary, Jost);
          font-size: var(--size-button-bu2, 14px);
          font-style: normal;
          font-weight: var(--weight-button-primary, 400);
          line-height: var(--line-height-button-bu2, 16px); /* 114.286% */
        }
        .city_stop{
          overflow: hidden;
          color: var(--surface-on-surface, #FFF);
          text-align: center;
          text-overflow: ellipsis;
          
          /* c1/prim */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
        .price_block{
        display: flex;
        width: 220px;
        min-height: 160px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        align-self: stretch;
        }
        .price_block_header{
          display: flex;

          padding: 20px 24px 16px 24px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }
        .price_body{
          display: flex;
          padding: 8px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          flex: 1 0 0;
          align-self: stretch;
        }
        .price_parts{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        .price{
          display: flex;
          padding-right: 4px;
          align-items: flex-start;
          
          color: var(--surface-on-surface, #FFF);
          text-align: center;
          
          /* h6/sec */
          font-family: var(--family-heading-primary, Jost);
          font-size: var(--size-heading-h6, 24px);
          font-style: normal;
          font-weight: var(--weight-heading-secondary, 500);
          line-height: var(--line-height-heading-h6, 28px); /* 116.667% */
        }
        .sub_price{
          color: var(--surface-on-surface, #FFF);
          text-align: center;
          
          /* c1/prim */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
          
          opacity: var(--surface-on-surface-opa-quaternary, 0.48);
        }
        .curency{
          display: flex;
          padding-top: 2px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          
          color: var(--surface-on-surface, #FFF);
          text-align: center;
          
          /* c1/prim */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-primary, 400);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
        }
        .price_bottom{
          display: flex;
          width: 220px;
          padding: 12px 12px 20px 12px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          gap: 8px;
        }
        .baggage{
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .carry{
          display: flex;
          padding: 4px 0;
          align-items: center;
          gap: 2px;
          
          color: var(--surface-on-surface, #FFF);
          text-align: center;
          
          /* c1/sec */
          font-family: var(--family-caption-primary, Jost);
          font-size: var(--size-caption-c1, 12px);
          font-style: normal;
          font-weight: var(--weight-caption-secondary, 500);
          line-height: var(--line-height-caption-c1, 14px); /* 116.667% */
          
          opacity: var(--surface-on-surface-opa-tertiary, 0.56);
        }
      </style>

      <div class="container">
        <div class="content">
          <div class="content_flight">
            <div class="leg"> 
              <div class="airline_emblem_container">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.8858H26.1206L32 3.65723H19.1412L0 27.8858ZM22.1238 8.31932V13.5395H27.2601V18.0071H22.1156V23.2273H17.7143V18.0071H12.5764V13.5395H17.7143V8.31932H22.1238Z" fill="#E60005"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1256 8.31934V13.5395H27.2619V18.0071H22.1173V23.2273H17.716V18.0071H12.5781V13.5395H17.716V8.31934H22.1256Z" fill="white"/>
                </svg>
              </div>
              <div class="flight_details_container">
                <div class="time">
                  <div class="depart_time_cont">
                  <div>4:15</div>
                  <div>am</div>
                  <div>–</div>
                  <div>7:55</div>
                  <div>pm</div>
                  </div>
                </div>                  
                <div class="origin_destination">
                  <div>New York (JFK)</div>
                  <div>–</div>
                  <div>London (LHR)</div>
                </div>
              </div>
              <div class="duration_container">
                10h 40m
              </div>
              <div class="parts">
                <div class="parts_stop">
                  1 stop
                </div>
                <div class="city_stop">
                  Zürich
                </div>
              
              </div>
            
            </div>
            <div class="leg"> 
              <div class="airline_emblem_container">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16.5637 22.477C16.5637 21.4988 17.0721 21.3138 18.0355 21.8425C19.8016 22.8207 21.648 23.8253 21.648 23.8253C21.7015 23.2701 22.1832 22.8207 23.2535 23.0322C24.2436 23.2701 25.3408 23.508 25.3408 23.508C25.3408 23.508 24.7521 22.1862 24.4845 21.6046C24.0028 20.5471 24.4577 20.0183 24.9394 19.8862C24.9394 19.8862 24.2704 19.4367 23.8155 19.1459C22.8789 18.485 23.093 17.8505 24.0028 17.4539C25.2605 16.9252 26.8393 16.2378 26.8393 16.2378C26.3309 15.947 25.7422 15.1539 26.4112 14.2022C27.0534 13.2769 28.0167 11.9814 28.0167 11.9814C28.0167 11.9814 26.3041 11.9814 25.1802 11.9814C24.1366 11.955 23.8958 11.1619 23.8958 10.5803C23.8958 10.5803 22.2099 11.7435 21.0058 12.5631C19.9889 13.224 19.0791 12.5895 19.2396 11.4263C19.4805 9.62854 19.6945 7.61931 19.6945 7.61931C19.0791 8.04231 18.0087 8.01587 17.527 7.01125C16.8313 5.50433 16.0017 3.75948 16.0017 3.75948C16.0017 3.75948 15.199 5.50433 14.5032 7.01125C14.0483 8.01587 12.9512 8.04231 12.3357 7.61931C12.3357 7.61931 12.5498 9.62854 12.7906 11.4263C12.9512 12.5895 12.0146 13.224 11.0245 12.5631C9.82031 11.7699 8.13447 10.5803 8.13447 10.5803C8.13447 11.1619 7.89363 11.9814 6.87677 11.9814C5.72612 11.9814 4.04027 11.9814 4.04027 11.9814C4.04027 11.9814 5.00361 13.2769 5.6726 14.2022C6.31482 15.1275 5.72612 15.947 5.24445 16.2378C5.24445 16.2378 6.7965 16.9252 8.05419 17.4539C8.99077 17.8505 9.20484 18.485 8.2415 19.1459C7.81335 19.4632 7.11761 19.8862 7.11761 19.8862C7.59928 20.0448 8.05419 20.5471 7.57252 21.6046C7.30492 22.1862 6.71622 23.508 6.71622 23.508C6.71622 23.508 7.81335 23.2701 8.80345 23.0322C9.84707 22.7942 10.3555 23.2701 10.409 23.8253C10.409 23.8253 12.2287 22.8207 13.9948 21.8425C14.9581 21.3138 15.4666 21.4988 15.4666 22.477V24.9092C15.4666 26.3104 15.199 27.8437 14.6638 28.6633C7.89363 27.9231 2.30091 22.5828 2.30091 15.5505C2.30091 8.30668 8.42882 2.41119 16.0017 2.41119C23.5747 2.41119 29.7026 8.30668 29.7026 15.5505C29.7026 22.3448 24.3774 27.8702 17.527 28.6104V30.3817C25.5549 29.6679 31.8433 23.2966 31.8433 15.5505C31.8433 7.3285 24.7521 0.639893 16.0017 0.639893C7.25141 0.639893 0.160156 7.30207 0.160156 15.5505C0.160156 22.7943 5.64584 28.8219 12.9512 30.1702C14.1821 30.4082 14.9581 30.5932 15.6003 31.3599C16.3764 29.9587 16.5637 26.9713 16.5637 25.2793V22.477V22.477Z" fill="#E82C2A"/>
                </svg>
              </div>
              <div class="flight_details_container">
                <div class="time">
                  <div class="depart_time_cont">
                  <div>8:30</div>
                  <div>am</div>
                  <div>–</div>
                  <div>2:48</div>
                  <div>pm</div>
                  </div>
                </div>                  
                <div class="origin_destination">
                  <div>London (LHR)</div>
                  <div>–</div>
                  <div>New York (JFK)</div>
                </div>
              </div>
              <div class="duration_container">
                11h 18m
              </div>
              <div class="parts">
                <div class="parts_stop">
                  1 stop
                </div>
                <div class="city_stop">
                  Toronto
                </div>
              
              </div>
            
            </div>
          
          </div>
        
        </div>
        <div class="price_block">
          <div class="price_block_header"></div>
          <div class="price_body">
            <div class="price_parts">
              <div class="price">
                <div class="curency">
                  $
                </div>
                675
              </div>
              <div class="sub_price">
                $67 total
              </div>
            </div>
          </div>
          <div class="price_bottom">
            <div class="baggage">
              <div class="carry">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <g opacity="0.56">
                    <path d="M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z" fill="var(--surface-on-surface, #FFF)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11.2761 1 11.5 1.22386 11.5 1.5C11.5 1.77614 11.2761 2 11 2H10.5V5.5C12.433 5.5 14 7.067 14 9V12C14 13.7632 12.6961 15.2212 11 15.4639V15.5C11 15.7761 10.7761 16 10.5 16C10.2239 16 10 15.7761 10 15.5H7C7 15.7761 6.77614 16 6.5 16C6.22386 16 6 15.7761 6 15.5V15.4639C4.3039 15.2212 3 13.7632 3 12V9C3 7.067 4.567 5.5 6.5 5.5V2H6C5.72386 2 5.5 1.77614 5.5 1.5C5.5 1.22386 5.72386 1 6 1H11ZM6.5 6.5C5.11929 6.5 4 7.61929 4 9V12C4 13.2108 4.8609 14.22 6.00391 14.4502C6.02897 14.1975 6.24071 14 6.5 14C6.77614 14 7 14.2239 7 14.5H10C10 14.2239 10.2239 14 10.5 14C10.7593 14 10.97 14.1976 10.9951 14.4502C12.1386 14.2204 13 13.2112 13 12V9C13 7.61929 11.8807 6.5 10.5 6.5H6.5ZM7.5 5.5H9.5V2H7.5V5.5Z" fill="var(--surface-on-surface, #FFF)"/>
                  </g>
                </svg>
                <div>1 Included</div>
              </div>
              
              <div class="carry">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <g opacity="0.56">
                    <path d="M11 5.5C11.2761 5.5 11.5 5.72386 11.5 6C11.5 6.27614 11.2761 6.5 11 6.5H6C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5H11Z" fill="var(--surface-on-surface, #FFF)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C11.2761 0 11.5 0.223858 11.5 0.5C11.5 0.776142 11.2761 1 11 1H10.5V2.5H11.5C13.433 2.5 15 4.067 15 6V12C15 13.7632 13.6961 15.2212 12 15.4639V15.5C12 15.7761 11.7761 16 11.5 16C11.2239 16 11 15.7761 11 15.5H6C6 15.7761 5.77614 16 5.5 16C5.22386 16 5 15.7761 5 15.5V15.4639C3.3039 15.2212 2 13.7632 2 12V6C2 4.067 3.567 2.5 5.5 2.5H6.5V1H6C5.72386 1 5.5 0.776142 5.5 0.5C5.5 0.223858 5.72386 0 6 0H11ZM5.5 3.5C4.11929 3.5 3 4.61929 3 6V12C3 13.2108 3.8609 14.22 5.00391 14.4502C5.02897 14.1975 5.24071 14 5.5 14C5.77614 14 6 14.2239 6 14.5H11C11 14.2239 11.2239 14 11.5 14C11.7593 14 11.97 14.1976 11.9951 14.4502C13.1386 14.2204 14 13.2112 14 12V6C14 4.61929 12.8807 3.5 11.5 3.5H5.5ZM7.5 2.5H9.5V1H7.5V2.5Z" fill="var(--surface-on-surface, #FFF)"/>
                  </g>
                </svg>
                <div>$10</div>
              </div>

            </div>
          </div>
        
        </div>
      
      </div> 
    `;
  }

  connectedCallback() {
    // const dropdown = this.shadowRoot.querySelector('.StyleClassName');
  }
}

customElements.define('flight-cart', FlightCart);

