import { authenticate, googleSignin } from '@/src/lib/actions';

import Login from '@/src/components/forms/Login';

const LoginWrapper = () => {
  return <Login googleSignin={googleSignin} userAuthenticate={authenticate} />;
};

export default LoginWrapper;
