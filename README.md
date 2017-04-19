# Routing

For routing using https://github.com/aksonov/react-native-router-flux

# Other libraries:

- react-native-button (TO ELIMINATE)
- react-native-drawer - drawer navigation fly-out
- validator - more complex validation functions (TO ELIMINATE)
- axios - XHR requests (maybe substitute with sth native)
- jwt-decode (JWT token manipulation)
- lodash (TO ELIMINATE)

DEV:
- remote-redux-devtools-on-debugger

# Questions/Doubts

- difference between react-redux and react-redux/native?

# Interesting

- you can pass props in the router:
<Button onPress={() => Actions.events({ data: 'Something', title: 'My title' })}>

- In case you want to fire 'route' actions from inner component, you should use
redux import Actions from this component (not from props), use connect method
for your component and use ()=>this.props.dispatch(Actions.ACTION_NAME(PARAM)

- programmatically go back: Actions.pop()

- refresh scene: Actions.refresh(PARAMS)
