'use client';

import PageNotFound from '@/src/components/ui/PageNotFound';

export default function Error() {
  return (
    <PageNotFound
      headerContent="Error"
      body="Something went wrong!"
      footer="Please try again."
      isBrowserError
    />
  );
}
