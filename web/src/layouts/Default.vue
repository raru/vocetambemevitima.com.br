<template>
  <div id="app">

    <app-header />

    <!-- <header class="header">
      <div class="header__left">
        <header-logo v-if="showLogo" />
      </div>
      <div class="header__right">
        <toggle-theme />
      </div>
    </header> -->

    <main class="main">
      <slot />
    </main>




    <app-footer />


  </div>
</template>

<script>
// import HeaderLogo from '~/components/HeaderLogo'
// import ToggleTheme from '~/components/ToggleTheme'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  // props: {
  //   showLogo: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  components: {
    AppHeader,
    AppFooter,    
    // HeaderLogo,
    // ToggleTheme
  }
}
</script>

<style lang="scss">


// @font-face {
//   font-family: VotorantimSans-Regular;
//   src: url("./assets/images/fonts/VotorantimSans-Regular.ttf") format("opentype");
// }

// @font-face {
//   font-family: VotorantimSans-Bold;
//   font-weight: bold;
//   src: url("./assets/images/fonts/VotorantimSans-Bold.ttf") format("opentype");
// }

// * {padding: 0; margin: 0}
// html { scroll-behavior: smooth; }
// body {overflow-x:hidden; font-family: 'VotorantimSans-Regular', sans-serif;   scroll-behavior: smooth;     font-size: 14px; height:100vh; }
// h1,h2,h3,h4,h5,h6 {   font-family: 'VotorantimSans-Bold', sans-serif; font-weight: 700 !important;}
// a:hover { opacity:.8;}



.container { max-width: 1480px; margin:auto;}
.m-50 { margin: 50px auto;}

footer {
    background: #fff url(./assets/images/INNPD+PBPD_Keyvisual_BKG-HEADER.png) no-repeat top center /cover;
 
    padding: 2%;
    display: flex;    
                font-size: 12px;
                font-family: 'DM Sans', sans-serif;
                font-weight: 400;    
                color: #777;
}
.social-icon svg { width: 25px; fill:#493063; }
        
            body { margin:0; padding:0;  }
            
            p {
                width: 80%;
                font-size: 15px;
                font-family: 'DM Sans', sans-serif;
                font-weight: 400;
                letter-spacing: 0px;
                text-align: center;
                vertical-align: top;
                color: #222;
                margin: auto;
            }
            a:hover {
                cursor: pointer;
                color: #493063;
                text-decoration: underline;
            }
            h1 {
                color: #493063;
                font-family: 'DM Sans', sans-serif;
                font-size: 28px;
                font-weight: 700;
                letter-spacing: 0px;
                text-align: center;
                margin: 8px;
                
            }
            h2 {
                color: #493063;
                font-family: 'DM Sans', sans-serif;
                font-size: 24px;
                margin: 8px;              
                    text-align: center;
            }
            .content {
                /*background:#fff url(./assets/images/INNPD+PBPD_Keyvisual_BKG-BOX.png) no-repeat top center /cover;*/
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                margin: auto;
            }
            .ic-launch  {
                margin-left: 10.5px;
                width: 21px !important;
                height: 20px !important;
            }
            
            .link-container {
    background: #493063;
    margin-top: 32px;
    padding: 32px;
    width: 100%;
box-sizing: border-box;
            }
            
            .link-container p {          color: white;      }
            .link-container h1 {          color: #d9ef0e;   text-transform:uppercase;   }


.link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #493063;
    margin-top: 8px;
    text-decoration: none;
    background: #d9ef0e;
    width: 300px;
    float: left;
    padding: 15px;
    box-sizing: border-box;
    margin: 10px;
    border-radius: 10px;
}
            
            .link:hover {
                cursor: pointer;
                color: #493063;
                opacity:.8;
            }
            
            .main-image {
                width: 100%;
                max-width: 650px;
                max-height: 406px;
                height: auto;
            }
            .navigation {
                width: 100%;
                height: 100px;
                display: flex;
                margin: 0;
                padding: 0;
                flex-direction: row;
                align-items: center;
                justify-content: center;
background: #fff url(./assets/images/INNPD+PBPD_Keyvisual_BKG-HEADER.png) no-repeat top center /cover;
            }
            
    

            @media screen and (max-width: 760px) and (min-width: 0px) {
                p {
                    width: 80%;
                }
                .link-container {
                    width: 100%; padding: 10px;
                }                
                .main-image {
                width: 80%;
                height: auto;
            }
            
footer {    padding: 5%;}

            }
            
            
            
            
            @media screen and (min-width: 650px) and (min-height: 0px) and (max-height: 750px) {
                .link-container {
                    margin-top: 12px;
                }
                h1 {
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
            }




.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 0;
  min-height: 70vh;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
