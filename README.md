🧠 Practice Task: Build a Mini Blog Routing System
🗂️ Objective:
Use file-based routing in Next.js (Pages Router) to create a basic blog structure with various types of pages and routing strategies.

🔧 Setup
Create a new Next.js app (if not already done):

npx create-next-app@latest blog-routing-practice
cd blog-routing-practice
npm run dev
📌 Task Requirements:
1. Create Static Routes
Create a pages/about.js page that explains the purpose of your blog.

Create a pages/contact.js page with placeholder contact info.

2. Create Nested Routes
Inside pages/blog/, create:

index.js – A list of dummy blog posts (e.g., Post 1, Post 2).

latest.js – Shows the "latest blog post" or a static message.

3. Create Dynamic Routes
Still inside pages/blog/, create [postId].js.

Use useRouter() to extract the postId from the URL.

Display: You are viewing post: <postId>.

4. Create Nested Dynamic Routes
Create pages/authors/[authorId]/posts/[postId].js.

Show: Author: <authorId>, Post: <postId>

5. Catch-All Routes
Create pages/docs/[...slug].js.

Use useRouter() to display the path as segments.

Example URL /docs/react/hooks → Output: react > hooks

6. Link Navigation
In pages/index.js, add links using the Link component to:

About

Blog

Contact

A specific blog post: /blog/hello-world

A nested dynamic route: /authors/john/posts/123

7. Programmatic Navigation
Add a button in pages/contact.js that navigates programmatically to /about.

8. Custom 404 Page
Create pages/404.js with a friendly error message.

✅ Bonus Challenge (Optional)
Add styling with basic CSS modules to give a blog-like feel.

Pass query params using router.push().

🧪 What This Reinforces:
Static and dynamic routes

File-based routing patterns

Navigation using Link and router.push()

Custom error handling

Router hooks like useRouter()

Let me know if you want this turned into a downloadable exercise file or integrated with TypeScript.