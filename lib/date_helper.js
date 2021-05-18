export function dateToWords(oldDate, currentDate = new Date()){
    const diffTime = Math.abs(currentDate - new Date(oldDate));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if(diffDays <= 7) return `${diffDays} days ago`;
    if(diffDays > 7 && diffDays <= 31) return `${Math.ceil(diffDays/4)} weeks ago`;
    if(diffDays > 31 && diffDays <= 365) return `${Math.ceil(diffDays/12)} months ago`;
    if(diffDays > 365) return `${Math.ceil(diffDays/365)} years ago`
}