export const firstLetterToUppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const timestampConverter = (dateObj) => {
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newDate = year + "/" + month + "/" + day;   
    return newDate;
}