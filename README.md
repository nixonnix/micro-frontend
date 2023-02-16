# Shared App Shell, 
- This example is written using webpack5 module federation to share compoents at runtime

This example demos a basic host application loading remote component.

- `shell` is the App Shell
- `dashboard` - standalone application
- `order` - standalone application
- `sales` - standalone application - home for many components
- `Invoice` - standalone application

# Running Details

- [localhost:3000](http://localhost:3000/) (HOST) - `shell`
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE) - `dashboard`
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE) - `order`
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE) - `sales`
- [localhost:3004](http://localhost:3004/) (STANDALONE REMOTE) - `Invoice`


# Data Transmission
- All the data transmissions occurs over   new BroadcastChannel("data_channel");
- Data should be transmitted as an object of type: {identifier for event type} and value: {value}
- Type can be nomenclatured as {context}:{dataType} - e.g, - 'app:title'
- example `bc.postMessage({
      type: 'app:title', value: 'Dashboard'
    });`

#TODO
- Unit Test
- End-to-End Test

