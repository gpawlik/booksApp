import React from 'react';
import { Actions, ActionConst, Modal, Scene } from 'react-native-router-flux';

import UserProfileContainer from 'components/User/UserProfile/UserProfileContainer';
import EditUserProfileContainer from 'components/User/EditUserProfile/EditUserProfileContainer';
import UserLeftingsListContainer from 'components/User/UserLeftings/UserLeftingsListContainer';

import LeftingsOverviewContainer from 'components/Leftings/LeftingsOverview/LeftingsOverviewContainer';
import LeftingDetailsContainer from 'components/Leftings/LeftingDetails/LeftingDetailsContainer';
import LeftingHistory from 'components/Leftings/LeftingHistory/LeftingHistory';

import ClaimBookSearchContainer from 'components/Claim/ClaimBookSearch/ClaimBookSearchContainer';
import ClaimPicture from 'components/Claim/ClaimPicture/ClaimPicture';
import ClaimConfirmationContainer from 'components/Claim/ClaimConfirmation/ClaimConfirmationContainer';

import ErrorScreen from 'components/Error/ErrorScreen';
import About from 'components/About/About';
import SettingsContainer from 'components/Settings/SettingsContainer';

import LoginContainer from 'components/Auth/Login/LoginContainer';
import RegisterContainer from 'components/Auth/Register/RegisterContainer';

import NavigationDrawer from 'components/Navigation/NavigationDrawer';
import TabIcon from 'common/components/TabIcon/TabIcon';
import MenuIcon from 'common/components/Icons/MenuIcon';

import translate from 'utils/translate';
import colors from 'config/colors';

export default Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root" hideTabBar>
      <Scene key="error" component={ErrorScreen} title="Error Screen" type={ActionConst.REPLACE} />

      <Scene key="tabbar" initial hideNavBar component={NavigationDrawer}>
        <Scene key="main" tabs style={{backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#dedede'}}>
          <Scene key="leftings" title="Leftings" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}} drawerImage={<MenuIcon />}>
            <Scene key="leftingsList" component={LeftingsOverviewContainer} title={translate('leftings.list.title')} />
            <Scene key="lefting" component={LeftingDetailsContainer} title={translate('leftings.profile.title')} />
            <Scene key="leftingHistory" component={LeftingHistory} title="Lefting History" />
            <Scene key="leftingClaimPicture" component={ClaimPicture} title="Lefting Claim Picture" />
            <Scene key="leftingClaim" component={ClaimConfirmationContainer} title="Lefting Claim Confirmation" />
          </Scene>
          <Scene key="createLefting" initial title="Create" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}}>
            <Scene key="step1" component={ClaimBookSearchContainer} hideNavBar title="Claim Book Search" />
            <Scene key="step2" component={ClaimPicture} hideNavBar={false} title="Claim picture" />
            <Scene key="step3" component={ClaimConfirmationContainer} title="Claim confirmation" />
          </Scene>
          <Scene key="profile" title="Profile" icon={TabIcon} navigationBarStyle={{backgroundColor: colors.primaryDark}} titleStyle={{color: 'white'}}>
            <Scene key="profileDetails" component={UserProfileContainer} title={translate('users.profile.title')} />
            <Scene key="editProfile" component={EditUserProfileContainer} title={translate('users.edit.title')} />
            <Scene key="userLeftings" component={UserLeftingsListContainer} title="User Leftings" />
            <Scene key="login" component={LoginContainer} title={translate('login.title')} type={ActionConst.REPLACE} />
            <Scene key="register" component={RegisterContainer} title={translate('signup.title')} />
          </Scene>
          <Scene key="about" component={About} title="About" icon={TabIcon}/>
          <Scene key="settings" component={SettingsContainer} title="Settings Screen" />
        </Scene>
      </Scene>
    </Scene>
  </Scene>
);
