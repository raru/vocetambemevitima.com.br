<template>
  <Layout>
    <h1 class="m-50">Na mídia</h1>

    <!-- Author intro -->
    <!-- <author-card :show-title="true" /> -->

    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        nomeVeiculo
        urlMateria                
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "DD/MM/YYYY")
        _rawExcerpt
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}

</page-query>

<script>
// import AuthorCard from '~/components/AuthorCard'
import PostCard from '~/components/PostCard'

export default {
  components: {
    // AuthorCard,
    PostCard
  },
  metaInfo: {
    title: 'Na Mídia - Você Também é Vítima'
  }
}
</script>
