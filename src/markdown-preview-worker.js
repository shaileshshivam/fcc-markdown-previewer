/* eslint-disable no-restricted-globals */
import { marked } from "marked";
import sanitizeHtml from "sanitize-html"

marked.setOptions({
    breaks: true,
    gfm: true,
})

self.onmessage = function previewWorkerOnMessage({ data }) {
    self.postMessage(sanitizeHtml(marked.parse(data)));
}