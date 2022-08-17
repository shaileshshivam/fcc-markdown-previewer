/* eslint-disable no-restricted-globals */
import { sanitizeAndParse } from "./utils/sanitizeAndParse"

self.onmessage = function previewWorkerOnMessage({ data }) {
    self.postMessage(sanitizeAndParse(data));
}