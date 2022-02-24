"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCharacter = exports.formatPhoneNumber = exports.formatCnpj = exports.formatCpf = exports.formatCep = void 0;
function formatCep(value) {
    return format(value, '00000-000', 8, /(\d{5})(\d{3})/, "$1-$2");
}
exports.formatCep = formatCep;
function formatCpf(value) {
    return format(value, '000.000.000-00', 11, /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
exports.formatCpf = formatCpf;
function formatCnpj(value) {
    return format(value, '00.000.000/0000-00', 14, /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}
exports.formatCnpj = formatCnpj;
function formatPhoneNumber(value) {
    return format(value, '(000) 0 0000-0000', 12, /(\d{3})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}
exports.formatPhoneNumber = formatPhoneNumber;
function removeCharacter(value, characteresToRemove) {
    if (value && value.length >= 1 && characteresToRemove && characteresToRemove.length >= 1) {
        for (const character of characteresToRemove) {
            value = String(value).replace(new RegExp(`\\${character}`, 'gi'), '');
        }
    }
    return value;
}
exports.removeCharacter = removeCharacter;
function format(value, defaultFormat, expectedSize, pattern, stringFormat) {
    if (value && value.length >= expectedSize) {
        const filteredValues = String(value).replace(/\D/g, "");
        return (filteredValues.length < expectedSize) ?
            defaultFormat :
            filteredValues.slice(0, expectedSize)
                .replace(pattern, stringFormat);
    }
    return defaultFormat;
}
console.log(formatPhoneNumber('8494614652346123'));
console.log(formatCep('jhse0fs5erf5v872sef5r7v'));
console.log(formatCpf('sdhfvsy78e6f7s6efgsdfg6s76d786676875263465628346785'));
console.log(formatCnpj('0917257128999288827'));
console.log(removeCharacter("`as~jkh&*&87855#******/[fks*h*(Fd2Qa!!kfh", "`~!@#$%^&*()_|+\-=?;:'\",.<>\{\}\[\]\\\/"));
