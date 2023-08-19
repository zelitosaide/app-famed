export async function getLinks(category) {
  const res = await fetch(`http://localhost:3001/links/category/${category}`);
  return res.json();
}