import Head from "next/head";

const globalMeta = {
  siteName: "Shayan Chowdhury",
  siteUrl: "https://shayanchowdhury.com",
  siteLogo: "https://www.shayanchowdhury.com/logo512.png",
  email: "shayan@reach4help.org",
  description:
    "Hi, I'm Shayan! I'm a student & neuroscience researcher at Columbia University, founder of the tech nonprofit Reach4Help, and a climate activist with Al Gore's Climate Reality Project and the World Economic Forum dedicated to making the world a more equitable and just place through technology and human resilience. Come and drop by!",
  // "I'm the Founder and Executive Director of the tech nonprofit Reach4Help, developing software to help 10K+ charitable organizations provide easier access to volunteer help worldwide. Currently, I'm also a student and behavioral neuroscience researcher at Columbia University in New York City. For Reach4Help's work on coordinating aid during crises from the COVID-19 pandemic in India to the refugee crisis in Ukraine, I've been honored to be invited to speak at Google, the United Nations' Headquarters, and the World Economic Forum's Annual Summit in Switzerland. Previously, I worked as a data analyst with the Bangladesh Ministry of Health, analyzing COVID-19 data to inform governmental policy on lockdowns, resource allocation, and public health communications. After receiving years of guidance in research, data science, and software development from incredible mentors at the NY Genome Center, Google, and Nobel laureate Joachim Frank's lab, I'm also humbled to recently be appointed as the Director of Mentorship and Education at the Collaborative Visualization Team originally based out of Harvard to give back to fellow students excited to explore the world of research and its applications.",
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
