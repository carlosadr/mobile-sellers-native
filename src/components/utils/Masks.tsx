function maskCep ( value : string ) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");

    return value;
}

function maskPhone ( value : string ) {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d)/, "($1) $2 $3-$4")

    return value;
}

export {
    maskCep,
    maskPhone
}