/* eslint-disable no-restricted-globals */
import { marked } from "marked";
import sanitizeHtml from "sanitize-html"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const sanitizeOptions = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
        "*": ["class", "src"]
    }
}

marked.options({
    breaks: true,
    gfm: true,
    highlight: (code) => {
        return hljs.highlightAuto(code).value
    }
})

self.onmessage = function previewWorkerOnMessage({ data }) {

    const htmlMarkup = marked.parse(data)
    const sanitizedHtmlMarkup = sanitizeHtml(htmlMarkup, sanitizeOptions)
    self.postMessage(sanitizedHtmlMarkup);
}