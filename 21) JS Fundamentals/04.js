
function extractDateParts(pattern, str) {
    const regex = new RegExp(pattern);
    const match = regex.exec(str);

    if (!match) {
        return null; 
    }

    const day = match[1];
    const month = match[2];
    const year = match[3];

    return {
        day: day,
        month: month,
        year: year
    };
}

const pattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/; 
const dateString = "Today's date is 05/04/2024.";
const extractedDate = extractDateParts(pattern, dateString);

console.log("Extracted Date:", extractedDate);
