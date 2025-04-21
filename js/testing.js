function validateFirstInitial(initial){
    const letters = /[a-zA-Z]/;

    if(initial === " " || (!letters.test(initial))){ 
        return "First initial must be a letter";
    } else{
        return initial.toUpperCase();
    }
}

function formatBirthMonth(birthMonth){
    return birthMonth.toString();
}

module.exports.validate = validateFirstInitial;
module.exports.format = formatBirthMonth;