import React from 'react';
import { Actions, ActionConst, Modal, Scene } from 'react-native-router-flux';

import UserProfileContainer from 'components/User/UserProfile/UserProfileContainer';
import EditUserProfileContainer from 'components/User/EditUserProfile/EditUserProfileContainer';

import LeftingsListContainer from 'components/Leftings/LeftingsList/LeftingsListContainer';
import LeftingDetailsContainer from 'components/Leftings/LeftingDetails/LeftingDetailsContainer';
import EditLeftingPage from 'components/Leftings/LeftingDetails/EditLeftingPage';

import CreateLeftingPage from 'components/Leftings/LeftingDetails/CreateLeftingPage';
import CreateLeftingPicture from 'components/Leftings/LeftingPicture/CreateLeftingPicture';
import CreateLeftingLocation from 'components/Leftings/LeftingLocation/CreateLeftingLocation';

import ErrorScreen from 'components/Error/ErrorScreen';
import About from 'components/About/About';

import LoginContainer from 'components/Auth/Login/LoginContainer';
import RegisterContainer from 'components/Auth/Register/RegisterContainer';

import NavigationDrawer from 'components/Navigation/NavigationDrawer';
import TabIcon from 'common/components/TabIcon/TabIcon';

import translate from 'utils/translate';
import colors from 'config/colors';

export default Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root" hideTabBar>
      <Scene key="error" component={ErrorScreen} title="Error Screen" type={ActionConst.REPLACE} />
      <Scene key="login" direction="vertical" >
        <Scene key="loginModal" direction="vertical" component={LoginContainer} title={translate('login.title')} />
      </Scene>
      <Scene key="register" component={RegisterContainer} title={translate('signup.title')} onBack={() => this.onBackToLogin() } />
      <Scene key="profile">
        <Scene key="myProfile" initial component={UserProfileContainer} title="My Profile" />
        <Scene key="editProfile" component={EditUserProfileContainer} title={translate('users.edit.title')} />
      </Scene>

      <Scene key="tabbar" initial hideNavBar component={NavigationDrawer}>
        <Scene key="main" tabs>
          <Scene key="leftings" initial title="Leftings" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}}>
            <Scene key="leftingsList" component={LeftingsListContainer} title={translate('leftings.list.title')} />
            <Scene key="lefting" component={LeftingDetailsContainer} title={translate('leftings.profile.title')} />
            <Scene key="editLefting" component={EditLeftingPage} title={translate('leftings.edit.title')} />

          </Scene>
          <Scene key="createLefting" title="Create" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}}>
            <Scene key="step1" component={CreateLeftingPicture} title="Make a picture" />
            <Scene key="step2" component={CreateLeftingPage} title="Setup details" />
            <Scene key="step3" component={CreateLeftingLocation} title="Setup location" />
          </Scene>
          <Scene key="profile" title="Profile" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}}>
            <Scene key="profileDetails" component={UserProfileContainer} title={translate('users.profile.title')} />
          </Scene>
          <Scene key="about" component={About} title="About" icon={TabIcon}/>
        </Scene>
      </Scene>
    </Scene>
  </Scene>
);
