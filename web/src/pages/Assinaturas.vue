   <template>
    <Layout>
<h1>TEste</h1>

    <div>

      <p v-for="edge in $page.allSanityPage.edges" > {{ edge.node.title }}</p>
      <hr/>
      <p v-for="edge in $page.allSanityPage.edges" > {{ edge.node._rawContent }}</p>
    </div>
    </Layout>
  </template>
  

  <page-query>
    query {
      allSanityPage {
        edges {
          node {
            title
            _rawContent
          }
        }
      }
    }
    </page-query>