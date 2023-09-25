export async function getPublicationsOrProjects(name) {
  const res = await fetch(`http://localhost:3001/${name}`, {
    cache: "no-cache"
  });
  return res.json();
}

export async function getCourseById(id) {
  const res = await fetch(`http://localhost:3001/courses/${id}`, {
    cache: "no-cache"
  });
  return res.json();
}

export async function getCourses() {
  const res = await fetch(`http://localhost:3001/courses`, {
    cache: "no-cache"
  });
  return res.json();
}

export async function getLinks(category) {
  const res = await fetch(`http://localhost:3001/links/category/${category}`, {
    cache: "no-cache"
  });
  return res.json();
}

export async function getLinkByTitle(title) {
  const res = await fetch(`http://localhost:3001/links/title/${title}`, {
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

export async function updateContent(id, content) {
  const res = await fetch(`http://localhost:3001/contents/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ content }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    },
  });
  
  return res.json();
}