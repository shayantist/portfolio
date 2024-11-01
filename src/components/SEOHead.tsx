import Head from "next/head";

const globalMeta = {
  siteName: "Shayan Chowdhury",
  siteUrl: "https://shayanchowdhury.com",
  siteLogo: "https://www.shayanchowdhury.com/logo512.png",
  email: "sc4040@columbia.edu",
  description:
    "Hi, I'm Shayan! I'm a computer science and public policy student at Columbia University, AI and Medicine Research Trainee at Harvard Medical School, founder of the tech nonprofit Reach4Help, and a climate policy leader with Al Gore's Climate Reality Project working to solve societal challenges through AI and human resilience. For my work, I've been honored to be invited to speak at Google, the UN Headquarters, the International Youth Conference, and events hosted by the World Economic Forum. Come and drop by!",
};

export default function SEO({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogType = "website",
  ogImgUrl = globalMeta.siteLogo,
  //   structuredData,
  children,
}: any) {
  return (
    <Head>
      {/*
        	Fundamental head elements important for SEO.
    	*/}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />

      {/*
        	Open graph meta tags.
    	*/}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/*
        	Structured data.
    	*/}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
        key="item-jsonld"
      /> */}
      {children}
    </Head>
  );
}
