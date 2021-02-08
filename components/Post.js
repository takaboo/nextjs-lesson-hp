import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="">{post.title}</span>
      </Link>
    </div>
  );
};

export default Post;
