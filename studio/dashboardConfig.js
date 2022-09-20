export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632a0dba04beb600b9d106f5',
                  title: 'Sanity Studio',
                  name: 'vocetambemevitima-com-br-studio',
                  apiId: 'f0978581-6cef-414d-9d44-be71674a14de'
                },
                {
                  buildHookId: '632a0dba85e77100ba38f82b',
                  title: 'Blog Website',
                  name: 'vocetambemevitima-com-br',
                  apiId: '1515dd93-651c-41a0-ae7e-db522232cdc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raru/vocetambemevitima.com.br',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vocetambemevitima-com-br.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
