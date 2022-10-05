export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Titulo',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      option: {
        source: 'title',
        maxLenght: 96
      }
    },    
    // {
    //   name: 'navMenu',
    //   type: 'reference',
    //   title: 'Navigation menu',
    //   // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
    //   to: [{ type: 'navigationMenu' }],
    //   description: 'Which nav menu should be shown, if any',
    // },
    // {
    //   name: 'content',
    //   type: 'array',
    //   title: 'Page sections',
    //   description: 'Add, edit, and reorder sections',
    //   of: [
    //     { type: 'pricing' },
    //     { type: 'uiComponentRef' },
    //     { type: 'hero' },
    //     { type: 'infoRows' },
    //     { type: 'ctaColumns' },
    //     { type: 'ctaPlug' },
    //   ],
    // },
    {
      name: 'conteudo',
      type: 'text',
      title: 'Conteudo'
    }    
  ],
}
