import Button from '@/src/components/ui/Button';
import { useFormStatus } from 'react-dom';

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      data-testid="LoginButton"
      sx={{ marginBottom: '32px', width: '100%' }}
      aria-label="signin-button"
      children={pending ? 'Loading...' : 'Sign in'}
      color="primary"
      type="submit"
      disabled={pending}
    />
  );
};
