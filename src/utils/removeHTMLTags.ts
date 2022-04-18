export function removeHTMLTags(text: string) {
  return text.split(/<[^>]*>/).join('');
}
