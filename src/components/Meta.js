import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "UAP NEWS",
  keywords: "testing, testing",
  description:
    "Stay up-to-date with the latest developments on Unidentified Aerial Phenomena (UAP) with our breaking news coverage. Explore credible reports, expert analysis, and eyewitness accounts on the mysterious sightings that have captivated the world&rsquo;s attention. Stay informed on the latest UAP news and unravel the mysteries of these elusive objects.",
};

export default Meta;
