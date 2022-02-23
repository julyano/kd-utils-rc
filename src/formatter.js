"use strict";
exports.__esModule = true;
exports.formatCep = void 0;
function formatCep(value) {
    if (value && value.length >= 8) {
        return String(value)
            .replace(/\D/g, "")
            .slice(0, 8)
            .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return '00000-000';
}
exports.formatCep = formatCep;
