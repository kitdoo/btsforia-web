export default function toUpperCase(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.toUpperCase();
}