import { PostList } from "@/components/PostList";
import { server } from "config";

export default function Home({ posts }) {
  return (
    <div>{posts.length ? <PostList posts={posts} /> : <h1>No posts</h1>}</div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
