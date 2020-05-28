module.exports = {
    title: 'SDC Technical Documentation',
    themeConfig: {
        smoothScroll: true,
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
        },  {
            text: 'In Memory Database',
            link: '/in-memory-database/'
        }],


        sidebar: {
            "/database/": [{
                title: "Databases",
                collapsable: true,
                children: [
                    "/database/",
                    "/database/MongoDB",
                    "/database/PostgreSQL"
                ]
            }],
            "/web-server/": [{
                title: "Web Server",
                collapsable: true,
                children: [
                    "/web-server/nginx"
                ]
            }],
            "/in-memory-database": [{
                title: "In Memory Database",
                collapsable: true,
                children:[
                    "/in-memory-database/",
                    "/in-memory-database/Redis",
                    "/in-memory-database/Memcached",
                    "/in-memory-database/RedisVsMemcached"
                ]
            }],
            "/": [
                ""
            ],
        }
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
