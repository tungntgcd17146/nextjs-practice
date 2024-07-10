import PageNotFound from '@/src/components/ui/PageNotFound';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products Dashboard',
};

export default function Page() {
  return (
    <PageNotFound
      headerContent="Oops"
      body="This page does not exist."
      footer="This feature will be implemented in the future."
      isBrowserError
    />
  );
}
