"use client";
import DOMPurify from "isomorphic-dompurify";

interface ShowHTMLContentTypes {
  content: string;
}

const parseIfJson = (str: string) => {
  // Contentin JSON olub olmadigini yoxlayir
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
};

const ShowHTMLContent = ({ content }: ShowHTMLContentTypes) => {
  const htmlString = parseIfJson(content);
  const safeHtmlString = DOMPurify.sanitize(htmlString);

  return content ? (
    <div dangerouslySetInnerHTML={{ __html: safeHtmlString }}></div>
  ) : null;
};

export default ShowHTMLContent;
