export function customSanitize(input) {
    return input.replace(/(<([^>]+)>)/g, "")
}
