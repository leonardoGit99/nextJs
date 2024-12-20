import Post from "@/src/pages/Post";

export default async function page({params}) {
  return (
    <Post id = {params.id}/>
  );
}