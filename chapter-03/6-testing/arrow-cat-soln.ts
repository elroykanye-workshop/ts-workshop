export const sentence = (
    subject: string, 
    verb: string,
    ...objects: string[]
): string => {
    return `${subject} ${verb} ${arrayTobObjectSegment(objects)}`;
}

export const arrayTobObjectSegment = (words: string[]): string => {
    if(words.length < 1) return "";
    //if(words.length === 1) return `${words[0]}`;
    let segment = "";
    for(let i = 0; i < words.length; i++) {
        if(words.length - (i + 1) == 0) {
            segment += ` ${words[i]}.`
            break;
        }
        segment += `${words[i]}, `
        if(words.length - (i + 1) == 1) segment += "and"
    }
    return segment;
};

export const capitalise = (sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase}${
        sentence.slice(1).toLowerCase()
    }`;
};