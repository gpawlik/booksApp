import { userWatcher } from 'components/User/Users.saga';
import { claimWatcher } from 'components/Claim/Claim.saga';

export default function* rootSaga() {
  yield [
    userWatcher(),
    claimWatcher()
  ];
}
