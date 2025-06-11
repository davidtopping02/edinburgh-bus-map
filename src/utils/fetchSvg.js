export async function fetchSvg(url) {
  const text = await fetch(url).then((r) => r.text());
  const parser = new DOMParser();
  return parser.parseFromString(text, "image/svg+xml").documentElement;
}
