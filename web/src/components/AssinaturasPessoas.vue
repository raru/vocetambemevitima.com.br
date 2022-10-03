<template>

  <div>
  <h2 v-html="$static.sanityPage.titulo" />
  <p v-html="$static.sanityPage.conteudo" />
  </div>
  
  </template>
  
  
  <static-query>
    
    query {
      sanityPage(id: "0fb80ac1-a49a-4f54-8d20-bd85a7d8ea29") {
          titulo
          conteudo
          id
          slug {
            current
          }
        }
    }
  </static-query>
  

<!-- 
import page from '../../../studio/schemas/documents/page';
<template>
  <Layout>

  <div>

    <h1 v-html="$page.sanityPage.titulo" />
    <p v-html="$page.sanityPage.conteudo" />

  </div>
  </Layout>
</template>


<page-query>
  query {
    sanityPage(id: "0fb80ac1-a49a-4f54-8d20-bd85a7d8ea29") {
        titulo
        conteudo
        id
        slug {
          current
        }
      }
  }
  </page-query> -->


<style>
  h2 { color: #d7ee01; font-size: 18px;}
  .v--modal {
    background-color: #3b2650;
    overflow-y: scroll !important;
}

.v--modal p {
    font-size: 9px !important;
    color: #fff; 
}

</style>