export class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    // Crearea și atașarea HTML + CSS în interiorul DOM umbră
    this.shadowRoot.innerHTML = `
      <style>
      
       .form_section{
         margin-top: 48px;
         display: flex;
         justify-content: center;
      }
      
      .container{
        display: flex;
        width: 688px;
        padding: 40px 40px 48px 40px;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
                
        border-radius: 48px;
        /*border: 1px solid var(--outline-outline-variant, #393939);*/
        /*background: var(--surface-surface-bright, #282828);*/
        border: 1px solid var(--outline-outline-variant, #E7E7EE);
        background: var(--blur-1, rgba(255, 255, 255, 0.24));
        backdrop-filter: blur(4px);
        box-shadow: 0px 6px 32px 0px var(--surface-surface, #1E1E1E);
        position: relative;
      }
      
      .input_container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
      }
      .input_row{
        display: flex;
        align-items: center;
        gap: 40px;
        align-self: stretch;
      }
      
      .input_parameters{
        display: flex;
        padding: 22px 16px 22px 24px;
        align-items: center;
        gap: 12px;
        flex: 1 0 0;
        
        border-radius: 24px;
        border: 1px solid var(--outline-outline, #C6C6CD);
        
        cursor: pointer;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .input_parameters:hover{
        border: 1px solid var(--outline-outline, #45464C);
        background: var(--surface-surface-container, #303030);
      }
      
      .input_content{
        display: flex;
        align-items: center;
        gap: 12px;
        
        overflow: hidden;
        color: var(--surface-on-surface, #000);
        text-overflow: ellipsis;
        
        /* b1/prim */
        font-family: var(--family-body-primary, Jost);
        font-size: var(--size-body-b1, 16px);
        font-style: normal;
        font-weight: var(--weight-body-primary, 400);
        line-height: var(--line-height-body-b1, 20px); /* 125% */
      }
      
      .input_icon{
        fill: var(--surface-on-surface, #000);
      }
      
      .main_button_shadow{
        display: flex;
        width: 688px;
        flex-direction: column;
        align-items: center;
        position: relative;
        
        cursor: pointer;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .button_main{
        display: flex;
        padding: 22px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        
        border-radius: 24px;
        /*border: 3px solid rgba(128, 91, 255, 0.32);*/
        background: radial-gradient(42.38% 100% at 50% 100%, #B19DFF 0%, #643AE2 100%);
        box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.48) inset;
        
        color: var(--primary-on-primary, #FFF);

        /* s1/sec */
        font-family: var(--family-subtitle-primary, Jost);
        font-size: var(--size-subtitle-s1, 20px);
        font-style: normal;
        font-weight: var(--weight-subtitle-secondary, 500);
        line-height: var(--line-height-subtitle-s1, 24px); /* 120% */
        z-index: 1;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .main_button_shadow:hover .button_main{
        box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.48) inset;
      }
      
      .pozitie_umbra{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -32%);
        opacity: 0.72;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .main_button_shadow:hover .pozitie_umbra{
        transform: translate(-50%, -44%);
      }
      
      </style>
      
      <div class="form_section">
        <div class="container">
          <div class="input_container"> 
            <div class="input_row">
              <div class="input_parameters">
              <div class="input_content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path class="input_icon" fill-rule="evenodd" clip-rule="evenodd" d="M17.8815 4.51854C15.9397 2.75326 13.1019 2.38904 10.7772 3.60672L6.17193 6.01903C6.01695 6.10021 5.8272 6.07125 5.70348 5.94754L4.40888 4.65294C4.07409 4.31815 3.57888 4.20125 3.12971 4.35097L1.94563 4.74566C1.26957 4.97102 0.918415 5.71511 1.17424 6.38024L2.38595 9.53071C2.77908 10.5528 3.89642 11.0961 4.9431 10.774L8.13841 9.79087L7.86333 10.7536C7.624 11.5913 8.42109 12.3545 9.24756 12.079L11.4965 11.3294C11.7882 11.2321 12.0339 11.0307 12.1865 10.7637L13.5268 8.41805C13.5808 8.32361 13.6695 8.25402 13.7741 8.22414L18.13 6.97961C18.9463 6.74638 19.1893 5.70745 18.5611 5.13636L17.8815 4.51854ZM11.1639 4.34492C13.1786 3.28959 15.638 3.60525 17.3209 5.13516L18.0005 5.75298C18.1455 5.88477 18.0894 6.12452 17.901 6.17834L13.5452 7.42287C13.2314 7.51251 12.9652 7.72129 12.8033 8.0046L11.4629 10.3502C11.4121 10.4392 11.3302 10.5064 11.2329 10.5388L8.98404 11.2884C8.79332 11.352 8.60937 11.1759 8.6646 10.9826L9.1085 9.42891C9.21752 9.04737 8.85997 8.69697 8.4807 8.81366L4.69803 9.97756C4.07002 10.1708 3.39961 9.84483 3.16374 9.23156L1.95202 6.08109C1.86675 5.85938 1.9838 5.61135 2.20916 5.53623L3.39324 5.14154C3.54296 5.09163 3.70803 5.1306 3.81963 5.2422L5.23553 6.6581C5.54481 6.96738 6.01919 7.03977 6.40664 6.83682L11.1639 4.34492Z" fill="black"/>
                <path class="input_icon" d="M1.66669 16.25C1.43657 16.25 1.25002 16.4365 1.25002 16.6667C1.25002 16.8968 1.43657 17.0833 1.66669 17.0833H15C15.2301 17.0833 15.4167 16.8968 15.4167 16.6667C15.4167 16.4365 15.2301 16.25 15 16.25H1.66669Z" fill="black"/>
              </svg>
              New York
              </div>
            </div>
            <div class="input_parameters">
              <div class="input_content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path class="input_icon" fill-rule="evenodd" clip-rule="evenodd" d="M17.3182 11.0759C16.5641 8.56228 14.3201 6.78747 11.7004 6.63271L6.52277 6.32684C6.34084 6.31609 6.18701 6.18836 6.14301 6.01151L5.70388 4.24673C5.58955 3.78727 5.22545 3.43185 4.76337 3.32863L3.54526 3.05653C2.84977 2.90117 2.16532 3.3578 2.0417 4.05963L1.45618 7.38392C1.26622 8.46242 1.94368 9.50389 3.0066 9.76742L6.25151 10.5719L5.51954 11.2551C4.88269 11.8496 5.17236 12.9144 6.02259 13.1043L8.33611 13.6211C8.63626 13.6882 8.95059 13.6422 9.21898 13.4921L11.5766 12.1729C11.6715 12.1198 11.7834 12.1059 11.8885 12.1342L16.2626 13.3129C17.0823 13.5338 17.8261 12.7688 17.5821 11.9556L17.3182 11.0759ZM11.6512 7.46459C13.9216 7.59872 15.8664 9.13689 16.52 11.3153L16.7839 12.1951C16.8402 12.3827 16.6686 12.5593 16.4794 12.5083L12.1053 11.3296C11.7902 11.2447 11.4544 11.2863 11.1697 11.4457L8.81207 12.7648C8.72261 12.8149 8.61783 12.8302 8.51778 12.8078L6.20426 12.2911C6.00805 12.2472 5.94121 12.0015 6.08817 11.8643L7.26938 10.7618C7.55946 10.491 7.43367 10.0064 7.04852 9.91093L3.20714 8.95857C2.56938 8.80046 2.1629 8.17557 2.27688 7.52847L2.8624 4.20419C2.90361 3.97024 3.13176 3.81803 3.36359 3.86982L4.5817 4.14192C4.73573 4.17632 4.85709 4.2948 4.8952 4.44795L5.33433 6.21273C5.46635 6.74328 5.92785 7.12648 6.47363 7.15872L11.6512 7.46459Z" fill="white"/>
                <path class="input_icon" d="M4.99998 16.25C4.76986 16.25 4.58332 16.4365 4.58332 16.6667C4.58332 16.8968 4.76986 17.0833 4.99998 17.0833H18.3333C18.5634 17.0833 18.75 16.8968 18.75 16.6667C18.75 16.4365 18.5634 16.25 18.3333 16.25H4.99998Z" fill="white"/>
              </svg>
              Istambul
              </div>
            </div>
            </div>
            <div class="input_row">
              <div class="input_parameters">
              <div class="input_content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path class="input_icon" d="M6.66675 11.6667C7.12699 11.6667 7.50008 11.2936 7.50008 10.8334C7.50008 10.3731 7.12699 10 6.66675 10C6.20651 10 5.83341 10.3731 5.83341 10.8334C5.83341 11.2936 6.20651 11.6667 6.66675 11.6667Z" fill="white"/>
                <path class="input_icon" d="M7.50008 14.1667C7.50008 14.6269 7.12699 15 6.66675 15C6.20651 15 5.83341 14.6269 5.83341 14.1667C5.83341 13.7064 6.20651 13.3334 6.66675 13.3334C7.12699 13.3334 7.50008 13.7064 7.50008 14.1667Z" fill="white"/>
                <path class="input_icon" d="M10.0001 15C10.4603 15 10.8334 14.6269 10.8334 14.1667C10.8334 13.7064 10.4603 13.3334 10.0001 13.3334C9.53984 13.3334 9.16675 13.7064 9.16675 14.1667C9.16675 14.6269 9.53984 15 10.0001 15Z" fill="white"/>
                <path class="input_icon" d="M10.8334 10.8334C10.8334 11.2936 10.4603 11.6667 10.0001 11.6667C9.53984 11.6667 9.16675 11.2936 9.16675 10.8334C9.16675 10.3731 9.53984 10 10.0001 10C10.4603 10 10.8334 10.3731 10.8334 10.8334Z" fill="white"/>
                <path class="input_icon" d="M13.3334 11.6667C13.7937 11.6667 14.1667 11.2936 14.1667 10.8334C14.1667 10.3731 13.7937 10 13.3334 10C12.8732 10 12.5001 10.3731 12.5001 10.8334C12.5001 11.2936 12.8732 11.6667 13.3334 11.6667Z" fill="white"/>
                <path class="input_icon" fill-rule="evenodd" clip-rule="evenodd" d="M5.00008 0.416687C5.2302 0.416687 5.41675 0.603235 5.41675 0.833354V2.27199C5.55296 2.24892 5.69342 2.22879 5.83836 2.21118C6.89075 2.08335 8.23322 2.08335 9.97095 2.08335H10.0292C11.7669 2.08335 13.1094 2.08335 14.1618 2.21118C14.3067 2.22879 14.4472 2.24892 14.5834 2.27199V0.833354C14.5834 0.603235 14.77 0.416687 15.0001 0.416687C15.2302 0.416687 15.4167 0.603235 15.4167 0.833354V2.46959C15.9138 2.62854 16.3449 2.85543 16.7267 3.18149C16.9093 3.33743 17.0793 3.50747 17.2353 3.69005C17.8092 4.36202 18.0759 5.18699 18.2056 6.25496C18.3334 7.30736 18.3334 8.64983 18.3334 10.3876V10.4458C18.3334 12.1835 18.3334 13.526 18.2056 14.5784C18.0759 15.6464 17.8092 16.4714 17.2353 17.1433C17.0793 17.3259 16.9093 17.4959 16.7267 17.6519C16.0547 18.2258 15.2298 18.4925 14.1618 18.6222C13.1094 18.75 11.7669 18.75 10.0292 18.75H9.97097C8.23323 18.75 6.89075 18.75 5.83836 18.6222C4.77038 18.4925 3.94542 18.2258 3.27344 17.6519C3.09087 17.4959 2.92082 17.3259 2.76489 17.1433C2.19097 16.4714 1.92431 15.6464 1.79458 14.5784C1.66674 13.526 1.66674 12.1835 1.66675 10.4458V10.3876C1.66674 8.64982 1.66674 7.30735 1.79458 6.25496C1.92431 5.18699 2.19097 4.36202 2.76489 3.69005C2.92082 3.50747 3.09087 3.33743 3.27344 3.18149C3.65522 2.85543 4.08637 2.62854 4.58341 2.46959V0.833354C4.58341 0.603235 4.76996 0.416687 5.00008 0.416687ZM14.5834 3.11869V4.16669C14.5834 4.39681 14.77 4.58335 15.0001 4.58335C15.2302 4.58335 15.4167 4.39681 15.4167 4.16669V3.35474C15.7136 3.47472 15.9638 3.62585 16.1855 3.81516C16.3349 3.94275 16.474 4.08187 16.6016 4.23126C17.0107 4.71023 17.2415 5.32278 17.3649 6.25002H2.63524C2.7587 5.32278 2.98948 4.71023 3.39856 4.23126C3.52614 4.08187 3.66527 3.94275 3.81465 3.81516C4.03631 3.62585 4.28658 3.47472 4.58341 3.35474V4.16669C4.58341 4.39681 4.76996 4.58335 5.00008 4.58335C5.2302 4.58335 5.41675 4.39681 5.41675 4.16669V3.11869C5.5794 3.08759 5.75299 3.06101 5.93884 3.03843C6.93518 2.91741 8.22718 2.91669 10.0001 2.91669C11.773 2.91669 13.065 2.91741 14.0613 3.03843C14.2472 3.06101 14.4208 3.08759 14.5834 3.11869ZM2.50008 10.4167C2.50008 9.04702 2.50051 7.96438 2.55651 7.08335H17.4437C17.4997 7.96438 17.5001 9.04702 17.5001 10.4167C17.5001 12.1896 17.4994 13.4816 17.3783 14.4779C17.2585 15.4646 17.026 16.1052 16.6016 16.6021C16.474 16.7515 16.3349 16.8906 16.1855 17.0182C15.6886 17.4426 15.048 17.6751 14.0613 17.7949C13.065 17.916 11.773 17.9167 10.0001 17.9167C8.22718 17.9167 6.93518 17.916 5.93884 17.7949C4.95221 17.6751 4.31155 17.4426 3.81465 17.0182C3.66527 16.8906 3.52614 16.7515 3.39856 16.6021C2.97417 16.1052 2.74168 15.4646 2.62183 14.4779C2.5008 13.4816 2.50008 12.1896 2.50008 10.4167Z" fill="white"/>
              </svg>
              Apr 17 - Apr 24 
              </div>
            </div>
            <div class="input_parameters">
              <div class="input_content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path class="input_icon" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 2.08331C7.6989 2.08331 5.83341 3.94879 5.83341 6.24998C5.83341 8.55117 7.6989 10.4166 10.0001 10.4166C12.3013 10.4166 14.1667 8.55117 14.1667 6.24998C14.1667 3.94879 12.3013 2.08331 10.0001 2.08331ZM6.66675 6.24998C6.66675 4.40903 8.15913 2.91665 10.0001 2.91665C11.841 2.91665 13.3334 4.40903 13.3334 6.24998C13.3334 8.09093 11.841 9.58331 10.0001 9.58331C8.15913 9.58331 6.66675 8.09093 6.66675 6.24998Z" fill="white"/>
                <path class="input_icon" d="M3.75008 17.5C3.75008 16.0547 4.63501 15.1306 5.90386 14.545C7.18345 13.9544 8.78385 13.75 10.0001 13.75C11.2163 13.75 12.8167 13.9544 14.0963 14.545C15.3652 15.1306 16.2501 16.0547 16.2501 17.5C16.2501 17.7301 16.4366 17.9166 16.6667 17.9166C16.8969 17.9166 17.0834 17.7301 17.0834 17.5C17.0834 15.6119 15.885 14.4527 14.4455 13.7883C13.0168 13.1289 11.2838 12.9166 10.0001 12.9166C8.71632 12.9166 6.98338 13.1289 5.55464 13.7883C4.11515 14.4527 2.91675 15.6119 2.91675 17.5C2.91675 17.7301 3.1033 17.9166 3.33341 17.9166C3.56353 17.9166 3.75008 17.7301 3.75008 17.5Z" fill="white"/>
              </svg>
              1 Adult , Economy
              </div>
            </div>
            </div>
          </div>
          <div class="main_button_shadow">
            <div class="button_main">
              Next
            </div>
            <svg class="pozitie_umbra" width="536" height="101" viewBox="0 0 536 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_257_9757)">
              <ellipse cx="268" cy="50.5" rx="240" ry="22.5" fill="#977CFF"/>
              </g>
              <defs>
              <filter id="filter0_f_257_9757" x="0.700001" y="0.700001" width="534.6" height="99.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="13.65" result="effect1_foregroundBlur_257_9757"/>
              </filter>
              </defs>
            </svg>
          </div>

        </div>      
      </div>
    `;
  }

}

customElements.define('search-form', SearchForm);

