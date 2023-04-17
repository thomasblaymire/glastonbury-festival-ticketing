type PageProps = {
  searchParams: {
    urlCode: string;
  };
};

export default async function DashboardPage({ searchParams }: PageProps) {
  return <div>Dashboard Page</div>;
}
