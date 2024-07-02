import PageNotFound from '@/src/components/ui/PageNotFound';

export default function NotFound() {
  return (
    <PageNotFound
      headerContent="404"
      body="This page does not exist."
      footer="This section will be implemented in the future."
      isBrowserError
    />
  );
}
