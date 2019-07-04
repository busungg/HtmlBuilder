const configs = [
    {
        attr: {
            name: 'resolution',
            title: 'Change Resolution'
        },
        child: [
            {
                element: 'button',
                attr: {
                    class: 'hb_setting-btn-phone',
                    value: '320px'
                }
            },
            {
                element: 'button',
                attr: {
                    class: 'hb_setting-btn-tablet',
                    value: '768px'
                }
            },
            {
                element: 'button',
                attr: {
                    class: 'hb_setting-btn-browser',
                    value: H.config.width[0]
                }
            }
        ]
    },
    {
        element: 'button',
        attr: {
            name: 'import_html',
            title: 'Import HTML'
        }
    },
    {
        element: 'button',
        attr: {
            name: 'import_css',
            title: 'Import CSS'
        }
    },
    {
        element: 'button',
        attr: {
            name: 'export_html',
            title: 'Export HTML'
        }
    },
    {
        element: 'button',
        attr: {
            name: 'export_css',
            title: 'Export CSS'
        }
    }
];

module.exports = configs;