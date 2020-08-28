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
                  buildHookId: '5f48c173563865ce24109598',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ph2d1oxu',
                  apiId: '8ebc69c9-b0a2-4915-8fc2-0a417eb32e5b'
                },
                {
                  buildHookId: '5f48c1734801d5dbf86836e4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-t7pongrw',
                  apiId: '54857bba-e96b-4291-93c9-152b0482d912'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlectronikForge/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-t7pongrw.netlify.app', category: 'apps'}
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
