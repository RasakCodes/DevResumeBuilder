export default function HtmlContent({ content, className }) {
  return (
    <div
      style={{ whiteSpace: "pre-wrap", wordBreak: "keep-all" }}
      className={` ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
