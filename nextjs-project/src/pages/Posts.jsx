import PostCard from "@/src/components/PostCard";
import '@/src/app/posts/posts.css'

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })
  return data;
}
async function Posts() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div className="grid">
      {
        posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default Posts