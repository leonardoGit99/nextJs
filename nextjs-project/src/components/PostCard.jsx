"use client"

import { useRouter } from "next/navigation";

function PostCard({ post }) {
  const router = useRouter();

  return (
    <div className="bg-violet-400 p-10 text-white flex flex-col gap-2">
      <div className="h-full">
        <h3 className="text-xl font-bold">{post.id}. {post.title}</h3>
        <p className="text-slate-300">{post.body}</p>
      </div>
      <div>
        <button className="bg-cyan-700 text-white p-3 rounded-md" onClick={() => {
          router.push(`/posts/${post.id}`);
        }}>
          Click
        </button>
      </div>
    </div>
  )
}

export default PostCard