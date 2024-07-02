import PageNotFound from '@/src/components/ui/PageNotFound';

export default function Page() {
  return (
    <PageNotFound
      headerContent="Oops"
      body="This page does not exist."
      footer="This feature will be implemented in the future."
    />
  );
}
