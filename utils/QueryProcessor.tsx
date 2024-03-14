function toNumber(value: string) {
  return Number(value);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return ("I don't know, what is your Andrew ID?");
  } else if (query.toLowerCase().includes("name")) {
    return (
      "karissa"
    );
  } else if (query.toLowerCase().includes("largest")) {
    
    const split = query.split(':');
    const nums = split[1];
    var num_array = nums.split(',');
    const new_num_array = num_array.map(toNumber);
    return String(Math.max.apply(null, new_num_array))
  }
  return "";
}
