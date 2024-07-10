import Signup from '@/src/components/forms/Signup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup a user for the site',
};
export default function Page() {
  return <Signup />;
}
