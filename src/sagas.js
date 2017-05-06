import { userWatcher } from 'components/User/Users.saga';
import { claimWatcher } from 'components/Claim/Claim.saga';
import { leftingsWatcher } from 'components/Leftings/Leftings.saga';

export default function* rootSaga() {
  yield [
    userWatcher(),
    claimWatcher(),
    leftingsWatcher()
  ];
}
