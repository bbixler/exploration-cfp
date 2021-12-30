import { useLoaderData } from "remix";

export async function loader() {
  let res = await fetch("http://127.0.0.1:8788/helloworld");
  return res.json();
}

export default function Index() {
  const greeting = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix on Cloudflare Pages</h1>
      Hello, {greeting.hello}
    </div>
  );
}
