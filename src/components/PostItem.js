import Link from "next/link";

function PostItem({ post }) {
  return (
    <Link
      href={`/post/${post.id}`}
      className="mb-5 sm:mb-0 block bg-white/10 hover:bg-white/20 p-10 rounded-lg"
    >
      <h3 className="text-white text-xl">{post.title}</h3>
      <p className="text-white/50">{post.strapline}</p>
    </Link>
  );
}

export default PostItem;
