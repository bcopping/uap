import PostItem from "./PostItem";

export const PostList = ({ posts }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-5">
      {posts.map((post, i) => (
        <PostItem key={`post-${i}`} post={post} />
      ))}
    </div>
  );
};
