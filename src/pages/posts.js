import { server } from "config";
import Link from "next/link";
export default function Home({ posts }) {
  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/post/${post.id}`}
          className="mb-5 sm:mb-0 block bg-white/10 hover:bg-white/20 p-10 rounded-lg"
        >
          <div key={post.id} className="text-white mb-10 border p-10">
            <h2>{post.title}</h2>
            <p>{post.strapline}</p>
          </div>
        </Link>
      ))}
    </div>
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

// export async function getServerSideProps() {
//   const posts = await prisma.post.findMany();

//   const result = await prisma.post.findUnique({
//     where: {
//       id: 2,
//     },
//   });

//   return {
//     props: {
//       posts: JSON.parse(JSON.stringify(posts)),
//       post: JSON.parse(JSON.stringify(result)),
//     },
//   };
// }
