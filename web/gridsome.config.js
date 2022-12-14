// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Você Também é Vítima',
  siteDescription:
    'Chegou o momento da Plataforma Brasileira de Políticas sobre Drogas, a partir de sua rede de organizações membras, conselheiros consultivos e parceiros, e em parceria com a Iniciativa Negra por Uma Nova Política sobre Drogas, lançar ao mais amplo público a Agenda Emergencial pelo Fim da Guerra às Drogas no Brasil.    ',
    siteUrl: 'https://vocetambemevitima.com.br',
    pathPrefix: '/web/dist/',
  templates: {
    SanityPost: '/:slug__current'
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },

    {
      use: 'gridsome-plugin-modal'
    }    
    /* {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
      {

      }
    } */
  ]
}
