export function customSanitize(input) {
  const sanitizedInput = input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;")
  return sanitizedInput
}
