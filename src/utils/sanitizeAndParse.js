import { marked } from "marked";
import sanitizeHtml from "sanitize-html"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const sanitizeOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "strong", "em"]),
    allowedAttributes: {
        "*": ["class", "src"],
        "a": ["href"]
    }
}

const markedOptions = {
    breaks: true,
    gfm: true,
    highlight: (code) => {
        return hljs.highlightAuto(code).value
    }
}


marked.options(markedOptions)


function sanitizeAndParse(markdown) {
    const htmlMarkup = marked.parse(markdown)
    const sanitizedHtmlMarkup = sanitizeHtml(htmlMarkup, sanitizeOptions)
    return sanitizedHtmlMarkup
}

export { sanitizeAndParse }