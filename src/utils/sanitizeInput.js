export function customSanitize(input) {
  const sanitizedInput = input
    .replace(/</g, "Less than")
    .replace(/>/g, "Greater than")
    .replace(/'/g, "Single quote")
    .replace(/"/g, "Single quote")
  return sanitizedInput
}
