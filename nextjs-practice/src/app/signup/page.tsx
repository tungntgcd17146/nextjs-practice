import PageNotFound from "@/src/components/ui/PageNotFound";

export default function Page() {
  return (
    <PageNotFound
      isBrowserError
      headerContent="Oops"
      body="This page does not exist."
      footer="This section will be implemented in the future."
    />
  );
}
