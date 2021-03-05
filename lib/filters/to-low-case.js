export default function toLowCase(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.toLowerCase();
}