type Props = {
  params: {
    slug: string;
  };
};

export default function SlugPage({ params }: Props) {
  return <h1 style={{ height: "100vh" }}>{params.slug} Page</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];

  return products.map((slug) => ({ slug }));
}
