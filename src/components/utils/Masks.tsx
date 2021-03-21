function maskCep ( value : string ) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");

    return value;
}

function maskCpfOrCnpj ( value : string ) {
    value = value.replace(/\D/g, "");
    if ( value.length > 13 ){
        //CNPJ Mask
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, "$1.$2.$3/$4-$5")
    } else {
        //CPF Mask
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
    }

    return value;
}

function maskPhone ( value : string ) {
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d)/, "($1) $2 $3-$4")

    return value;
}

export {
    maskCep,
    maskPhone,
    maskCpfOrCnpj
}