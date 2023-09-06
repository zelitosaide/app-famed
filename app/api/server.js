export async function getLinks(category) {
  const res = await fetch(`http://localhost:3001/links/category/${category}`, {
    cache: "no-cache"
  });
  return res.json();
}


export async function getContent() {
  return `
    <h1>
      It’ll always have a heading …
    </h1>
    <p>
      … if you pass a custom document. That’s the beauty of having full control over the schema.
    </p>
  `;
}