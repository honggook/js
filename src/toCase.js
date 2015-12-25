function toCamelCase(input, separator) {
    return input.replace(new RegExp('(?:\\' + (separator || '_') + ')([^\1])', 'g'), function ($0, $1) {
        return $1.toUpperCase();
    });
}
var scToCc = toCamelCase;

function toSnakeCase(input, separator) {
    separator = separator || '_';
    return input.replace(/[A-Z]/g, function ($0) {
        return separator + $0.toLowerCase();
    });
}

var ccToSc = toSnakeCase;