export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e67d43463dea250d434db90',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-fj3ggg4j',
                  apiId: 'f53877da-34b1-4c99-8486-a9115700174a'
                },
                {
                  buildHookId: '5e67d434b6e18d01a79fdc74',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-wjyjisxu',
                  apiId: '66331b83-8a05-4b3b-9939-bfb33d988a0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaspars-ozols/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-wjyjisxu.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
