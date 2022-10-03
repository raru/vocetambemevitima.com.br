<template>

<div>
<h2 v-html="$static.sanityPage.titulo" />
<p v-html="$static.sanityPage.conteudo" />
</div>

</template>


<static-query>
  
  query {
    sanityPage(id: "2ff53e2d-7350-4067-84cf-9abed06ca88d") {
        titulo
        conteudo
        id
        slug {
          current
        }
      }
  }
</static-query>

<style>
  h2 { color: #d7ee01; font-size: 18px;}
  .v--modal {
    background-color: #3b2650;
    overflow-y: scroll !important;
}

.v--modal p {
    font-size: 9px !important;
}
</style>