export function formatCep(value: string) {
    if (value && value.length >= 8) {
        return String(value)
            .replace(/\D/g, "")
            .slice(0, 8)
            .replace(/(\d{5})(\d)/, "$1-$2");
    }

    return '00000-000';
}
