import { logout } from '@/src/lib/actions';

import Header from '@/src/components/layouts/Header';

const LoginWrapper = () => {
  return <Header logout={logout} />;
};

export default LoginWrapper;
