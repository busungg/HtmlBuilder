const configs = [
    {
        title: {
            element: 'label',
            prop: {
                name: 'preview',
                title: 'Preview'
            }
        },
        content: [
            {
                element: 'button',
                prop: {
                    name: 'preview',
                    title: 'Preview',
                    class: 'hb_setting-btn',
                    hb_set_name: 'preview'
                }
            }
        ]
    },
    {
        title: {
            element: 'label',
            prop: {
                name: 'resolution',
                title: 'Change Resolution'
            }
        },
        content: [{
            element: 'button',
            prop: {
                name: 'btn_resolution_phone',
                class: 'hb_setting-btn-phone',
                hb_set_name: 'resolution'
            }
        },
        {
            element: 'button',
            prop: {
                name: 'btn_resolution_tablet',
                class: 'hb_setting-btn-tablet',
                hb_set_name: 'resolution'
            }
        },
        {
            element: 'button',
            prop: {
                name: 'btn_resolution_browser',
                class: 'hb_setting-btn-browser',
                hb_set_name: 'resolution'
            }
        }
        ]
    },
    {
        title: {
            element: 'label',
            prop: {
                name: 'import_html',
                title: 'Import HTML'
            }
        },
        content: [{
            element: 'button',
            prop: {
                name: 'import_html',
                title: 'Import HTML',
                class: 'hb_setting-btn',
                hb_set_name: 'import_html'
            }
        }]
    },
    {
        title: {
            element: 'label',
            prop: {
                name: 'import_css',
                title: 'Import CSS'
            }
        },
        content: [{
            element: 'button',
            prop: {
                name: 'import_css',
                title: 'Import CSS',
                class: 'hb_setting-btn',
                hb_set_name: 'import_css'
            }
        }]
    },
    {
        title: {
            element: 'label',
            prop: {
                name: 'export_html',
                title: 'Export HTML'
            }
        },
        content: [{
            element: 'button',
            prop: {
                name: 'export_html',
                title: 'Export HTML',
                class: 'hb_setting-btn',
                hb_set_name: 'export_html'
            }
        }]
    },
    {
        title: {
            element: 'label',
            prop: {
                name: 'export_css',
                title: 'Export CSS'
            }
        },
        content: [{
            element: 'button',
            prop: {
                name: 'export_css',
                title: 'Export CSS',
                class: 'hb_setting-btn',
                hb_set_name: 'export_css'
            }
        }]
    }
];

module.exports = configs;