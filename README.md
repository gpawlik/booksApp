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
- babel-plugin-module-resolver (TO ELIMINATE, just to make maps plugin work)

# Questions/Doubts

- difference between react-redux and react-redux/native?

# Interesting

- check out ...StyleSheet.absoluteFillObject

- you can absolute position elements BUT zIndex works only on View components

- you can pass props in the router:
<Button onPress={() => Actions.events({ data: 'Something', title: 'My title' })}>

- In case you want to fire 'route' actions from inner component, you should use
redux import Actions from this component (not from props), use connect method
for your component and use ()=>this.props.dispatch(Actions.ACTION_NAME(PARAM)

- programmatically go back: Actions.pop()

- refresh scene: Actions.refresh(PARAMS)

- clean up and re-link:
rm -rf ios android node_modules
npm install
react-native upgrade
react-native link

- make native-maps work without error:
https://github.com/airbnb/react-native-maps/issues/1213
https://github.com/airbnb/react-native-maps/pull/1224/commits

?? https://github.com/mapbox/react-native-mapbox-gl

- Flexbox - 2 equally width items: flexGrow: 1 (equal width), flexBasis: 0 (no initial width)

# Troubleshooting

1) error: ENOENT no such file or directory, uv_chdir
solution: react-native upgrade

# Linked libraries
- react-native-svg

# Logo?
- http://www.dafont.com/snowboarding-only.font?fpp=100&psize=l&text=BooksFinder

# Strange things
- propType of passed style to the component is number, not object
(because of index based IDs created by StyleSheet.create)
