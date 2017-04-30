import { userWatcher } from 'components/User/Users.saga';

export default function* rootSaga() {
  yield [
    userWatcher()
  ];
}
