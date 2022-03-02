export function formatCep(value: string): string {
    return format(value, '00000-000', 8, /(\d{5})(\d{3})/, "$1-$2");
}

export function formatCpf(value: string): string {
    return format(value, '000.000.000-00', 11, /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatCnpj(value: string): string {
    return format(value, '00.000.000/0000-00', 14, /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

export function formatMobilePhone(value: string): string {
    return format(value, '(000) 0 0000-0000',12, /(\d{3})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}

export function formatLandLine(value: string): string {
    return format(value, '(000) 0000-0000',11, /(\d{3})(\d{4})(\d{4})/, "($1) $2-$3");
}

export function removeCharacter(value: string, characteresToRemove: string): string {
    if (value && value.length >= 1 && characteresToRemove && characteresToRemove.length >= 1) {
        for (const character of characteresToRemove) {
            value = String(value).replace(new RegExp(`\\${character}`,'gi'), '')
        }
    }
     
    return  value;
}

function format(value: string, defaultFormat: string, expectedSize: number, pattern: RegExp, stringFormat: string) {
    if (value && value.length >= expectedSize) {
        const filteredValues = String(value).replace(/\D/g, "");
        return (filteredValues.length < expectedSize)? 
            defaultFormat : 
            filteredValues.slice(0, expectedSize)
            .replace(pattern, stringFormat);
    }
     
    return  defaultFormat
}
