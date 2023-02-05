export const components = {
    'app2': {
        remote: 'app2',
        url: 'http://localhost:3002/remoteEntry.js',
        module: './Widget',
    },
    'app3': {
        remote: 'app3',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './Widget',
    },
    'TodayWidget': {
        remote: 'sales',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './TodayWidget',
    },
    'DepositsWidget': {
        remote: 'sales',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './DepositsWidget',
    },
    'QuickLinks': {
        remote: 'sales',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './QuickLinks',
    },
    'RecommendationWidget': {
        remote: 'sales',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './UserRecommendation',
    },
    'RecentOrdersWidget': {
        remote: 'order',
        url: 'http://localhost:3002/remoteEntry.js',
        module: './RecentOrdersWidget',
    },
    'NoData': {
        remote: 'sales',
        url: 'http://localhost:3003/remoteEntry.js',
        module: './NoData',
    },
    'Service': {
        remote: 'shell',
        url: 'http://localhost:3000/remoteEntry.js',
        module: './Service',
    },
    'Empty': {
        remote: 'vue',
        url: 'http://localhost:3005/remoteEntry.js',
        module: './Empty',
    },
    'Shell': {
        remote: 'shell',
        url: 'http://localhost:3000/remoteEntry.js',
        module: './Shell',
    },
    'CreateInvoice': {
        remote: 'profile',
        url: 'http://localhost:3004/remoteEntry.js',
        module: './CreateInvoice',
    }
}

