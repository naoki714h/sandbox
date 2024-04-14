import Head from "next/head";

interface CustomHeadProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
}

export function CustomHead({
  title,
  description,
  keywords,
  url,
}: CustomHeadProps) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${url}/assets/images/ogp.png`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${url}/assets/images/ogp.png`} />
      <link rel="icon" href="/assets/images/favicon.png" />
    </Head>
  );
}
