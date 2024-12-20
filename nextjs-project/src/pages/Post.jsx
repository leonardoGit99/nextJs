import { Suspense } from "react";
import Posts from "@/src/app/posts/page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data
}

async function Post({ id }) {
  const post = await loadPost(id);
  return (
    <div>
      <h1>Post {id} {post.title}</h1>
      <p>{post.body}</p>

      <h2>Otras publicaciones</h2>
      <Suspense fallback={<>Cargando publicaciones...</>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default Post