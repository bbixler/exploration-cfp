import { useLoaderData } from "remix";

export async function loader() {
  let res = await fetch("https://exploration-cfp.pages.dev/helloworld");
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
