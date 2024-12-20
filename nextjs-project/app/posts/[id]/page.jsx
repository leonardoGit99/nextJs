import { Suspense } from "react";
import Posts from "@/app/posts/page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data
}

export default async function Post({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h1>Post {params.id} {post.title}</h1>
      <p>{post.body}</p>

      <h2>Otras publicaciones</h2>
      <Suspense fallback={<>Cargando publicaciones...</>}>
        <Posts />
      </Suspense>
    </div>
  );
}