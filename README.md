# Routing

For routing using https://github.com/aksonov/react-native-router-flux

# Other libraries:

- react-native-button (TO ELIMINATE)
- react-native-drawer - drawer navigation fly-out
- validator - more complex validation functions (TO ELIMINATE)
- axios - XHR requests (maybe substitute with sth native)
- jwt-decode (JWT token manipulation)
- lodash (TO ELIMINATE)
- xml2js (parse xml string)

DEV:
- remote-redux-devtools-on-debugger
- babel-plugin-module-resolver (TO ELIMINATE, just to make maps plugin work)
- events, timers, stream, buffer (TO ELIMINATE, just to make xml2js work)

# Questions/Doubts

- difference between react-redux and react-redux/native?

# Interesting

- check out ...StyleSheet.absoluteFillObject

- you can absolute position elements BUT zIndex works only on View components (?)

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

- add and remove fonts: https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4

- make native-maps work without error:
https://github.com/airbnb/react-native-maps/issues/1213
https://github.com/airbnb/react-native-maps/pull/1224/commits

?? https://github.com/mapbox/react-native-mapbox-gl

- splash screen (use when link is implemented: https://github.com/react-native-component/react-native-smart-splash-screen)

- Flexbox - 2 equally width items: flexGrow: 1 (equal width), flexBasis: 0 (no initial width)

# Troubleshooting

1) error: ENOENT no such file or directory, uv_chdir
solution: react-native upgrade

2) Enable geolocation on Android (on iOS is enabled by default):
AndroidManifest.xml: <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

# Linked libraries
- react-native-svg
- react-native-maps
- react-native-camera

# Logo?
- http://www.dafont.com/snowboarding-only.font?fpp=100&psize=l&text=BooksFinder

# Strange things
- propType of passed style to the component is number, not object
(because of index based IDs created by StyleSheet.create)

- geolocation implementation may vary across android versions:
https://gist.github.com/raldred/b08cf60712eb87d81f05437444dff4ae

# TO-DOs
* Client

[x] some messaging system
[x] make connection work android
[x] make maps work android
[ ] setup map component with markers
[x] setup camera component
[x] setup settings data flow
[x] make searches via Goodreads API
[x] geolocation
[x] sagas on leftings
[ ] sagas on auth
[x] sagas on claim
[x] correct data flow on leftings
[ ] upload user picture
[ ] empty views / fallback information
[ ] load more results

[x] visual: claim details
[x] visual: settings scene
[x] visual: navigation consistency
[x] visual: about scene
[x] visual: book section in details

* Backend
[ ] process images (store cloud?)

PROS
# you build the app ONCE

CONS
# no long term prevision of support from FB
# 670 dependencies

# Allow XHR requests in dev tools
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security

# Interesting project to analize
https://github.com/nikgraf/CarteJaune

http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false&hot=true
