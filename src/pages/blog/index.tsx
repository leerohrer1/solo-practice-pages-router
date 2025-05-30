import Latest from "./latest";

export default function BlogPosts() {
  return (
    <>
      <h1>Blog Posts</h1>
      <Latest array={posts} />
      <h2>More Posts</h2>
      <ul>
        {posts.map((post) => 
          <>
            <li key={post.id}>{post.title}</li>
            <p>{post.content}</p>
          </>
        )}
      </ul>
    </>
  );
}

const posts = [
  { id: 1, title: "One", content: "words words words" },
  { id: 2, title: "Two", content: "words words words" },
  { id: 3, title: "Three", content: "words words words" },
  { id: 4, title: "Four", content: "words words words" },
  { id: 5, title: "Five", content: "words words words" },
];
