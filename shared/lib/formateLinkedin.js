export function formatLinkedInUrl(url) {
  if (url)
    if (url.startsWith("http://")) {
      return url.slice(7);
    } else if (url.startsWith("https://")) {
      return url.slice(8);
    }
  return url;
}
