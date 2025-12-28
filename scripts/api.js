function getProjectFromURL() {
  return new URLSearchParams(location.search).get("mod");
}

export async function getModFromURL(loader, mc) {
  const project = getProjectFromURL();
  if (!project) return null;

  const url =
    `https://cdn.jsdelivr.net/gh/arqyt/arqyt@apis/api/v1/project/${project}.json`;

  const res = await fetch(url);
  if (!res.ok) return null;

  const data = await res.json();
  return data.matrix?.[loader]?.[mc] ?? null;
}
