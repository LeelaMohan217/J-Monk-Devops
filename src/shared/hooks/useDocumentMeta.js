import { useEffect } from "react";

// Every route shared the one static <title>/no meta description from
// index.html — a page calls this once with its own copy instead. No new
// dependency (no react-helmet): same small-custom-hook pattern as
// useContactForm/useScrollPosition already in this folder.
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (!description) return;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }, [title, description]);
}
