function snippet (text: string, length: number): string {
    const ellipsis = "...";
    let result: string = "";
    if (text.length <= length) result = text;
   else  {
        result = text.slice(0, length - ellipsis.length);
        const lastSpace = result.lastIndexOf(" ");
        result = `${result.slice(0, lastSpace)}${ellipsis}`;
    }
    return result;
}

snippet(3, 3);