import Meta from "@/components/Meta";
import Link from "next/link";
import { server } from "config";

const post = ({ post }) => {
  return (
    <>
      <Meta title={post.title} description={post.strapline} />
      <div className="text-white">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        <br />
        <Link href="/">Go back</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts/`);
  const posts = await res.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default post;
