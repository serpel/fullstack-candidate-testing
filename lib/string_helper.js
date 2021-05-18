export const parseNameInitials = (fullname) => {
    if(!fullname) return "";

    var words = fullname.split(' ');  
    if(words?.length == 1) return fullname;
    return words.slice(0,2).map(n => n[0]).join("");
}