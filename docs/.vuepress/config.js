module.exports = {
    base: '/docs/',
    title: 'SDC Technical Documentation',
    themeConfig: {
        lastUpdated: "Last Updated",

        nav: [{
            text: "Home",
            link: "/"
        }, {
            text: 'Databases',
            link: '/database/'
        }, {
            text: 'Web Servers',
            link: '/web-server/'
        }],

        sidebar: [
            {
                title: "Database",
                path: "/database/",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    "/database/MongoDB"
                ]
            },
            {
                title: "Web Servers",
                path: "/web-server/",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    "/web-server/tomcat"
                ]
            }
        ]
    },


    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ],
};
