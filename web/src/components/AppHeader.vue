<template>
    <header>
      <!-- <img alt="HARPI logo" src="../assets/logo_harpi-header@2x.png" class="logo"> -->
      <nav>
        <ul>
          <li><a href="index.html#manifesto">Conheça a Agenda </a></li>
          <li><a href="vozes">Vozes pelo fim da guerra às drogas</a></li>
          <li><a href="namidia">Na mídia</a></li>
          <li><a href="eventos">Eventos pelo Fim da Guerra às Drogas</a></li>
          <li><a href="index.html#assine" class="btnAssine">Assine o manifesto</a></li>
        </ul>
      </nav>    
    </header>
  </template>
  
  
  
  
  <style scoped>
.btnAssine {
    background: var(--link-color);
    color: #d7ee01;
    padding: 5px;
}

  header {
      display: flex;
      border-bottom: 1px solid #ccc;
      padding: .5rem 1rem;
      background: #d7ee01;
      color: white;    
      padding: 2vh 9vw;
    }
  
  .logo { height: 64px;}  
      p {
        margin-left: 1rem;
      }
  
  nav {
      margin-right: auto;
      margin-left: auto;
      padding-top: 0;
      font-family: 'VotorantimSans-Bold', sans-serif; 
      font-weight: 700;
      font-size: 1.1em;
  }
  
    nav ul {
        list-style: none;
        margin-bottom: 0;
      }
  
    nav ul li {
        display: inline-flex;
        margin-left: 2.1rem;
      }  
  
      nav ul li a { text-decoration: none; font-size: .9em; }

      nav ul li a:hover { color: #be78ce; }
  
  
  @media ( max-width: 767.98px ) {
  
  nav {    font-size: .7em; padding-top: 0;}
  nav ul li {    width: 100%;}
  
  }
  
  </style>