import Signup from '@/src/components/forms/Signup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
};
export default function Page() {
  return <Signup />;
}
