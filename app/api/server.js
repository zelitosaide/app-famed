export async function getLinks(category) {
  const res = await fetch(`http://localhost:3001/links/category/${category}`, {
    cache: "no-cache"
  });
  return res.json();
}

export async function getContent(segment) {
  const res = await fetch(`http://localhost:3001/contents/segment/${segment}`, {
    cache: "no-cache"
  });
  
  return res.json();
}