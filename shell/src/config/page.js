export const routes = {
    'dashboard': {
        remote: 'dashboard',
        url: 'http://localhost:3001/remoteEntry.js',
        module: './DashboardService',
    },
    'order': {
        remote: 'order',
        url: 'http://localhost:3002/remoteEntry.js',
        module: './OrderService',
        children: {
            'details': {
                remote: 'order',
                url: 'http://localhost:3002/remoteEntry.js',
                module: './OrderService',
            },
            'summary': {
                remote: 'order',
                url: 'http://localhost:3002/remoteEntry.js',
                module: './OrderService',
            }
        }
    },
    'profile': {
        remote: 'profile',
        url: 'http://localhost:3004/remoteEntry.js',
        module: './ProfilePage',
    }
}