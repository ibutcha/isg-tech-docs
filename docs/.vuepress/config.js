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
        }],


        sidebar: {
            "/database/": [
                "",
                "MongoDB"
            ],
            "/web-server/": [
                "",
                "tomcat"
            ]
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
