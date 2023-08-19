export async function getLinks(category) {
  const res = await fetch(`http://localhost:3001/links/category/${category}`, {
    cache: "no-cache",
  });
  return res.json();
}