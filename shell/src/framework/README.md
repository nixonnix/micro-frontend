# Assumptions
- There exist a config maintaing details of all the components to be consumed as microfrontend
- A sample config can be found at shared-routing/shell/src/config/components.js

This example demos a basic host application loading remote component.

# Methods LoadPageComponents
- Type: Component
- default export
- Return all the component needed for the page in a lazy fashion
- Used to inject components for a route
- should accept the config of lodable widgets through a prop `lodables`
- Input to lodable should be an array of objects as follows `{
    widgets: [
      {
        id: "TodayWidget",
        layout: {
          xs: 12,
          md: 8,
          lg: 9,
        },
        height: '200px'
      },`

      Where id is ths id for components to be loaded from different server


# Method - InjectComponent
- Type: Component
- Named export
- Return a lazy loaded component
- This acts as placeholder for dynamic injection of components in the application
- suscribed to a broadcast channel - `load_components`
- expects the data in the event object as an object with these info 
- `{ context: {componentId}, as:  'modal||interstitial||drawer||inline', el: {id of element where component has to be injected} }`
- `el` is needed only if `as` value is inline 
- For inline injection, a placeholder element should exist in DOM. If not present, the widget will be injected in the root placeholder element

# Method - loadComponent
- Type: Method
- Named export
- Return a promise object of dynamic import which can be consumed by lazy methods
- expects a context: {ID of microfrontend} and type:"component" as an object shown below
- loadComponent({ context: "RecentOrdersWidget", type: "component" })

