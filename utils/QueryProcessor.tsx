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
    const new_string = query.replace('?', '');
    const split = new_string.split(':');
    const nums = split[1];
    var num_array = nums.split(',');
    const new_num_array = num_array.map(toNumber);
    return String(Math.max.apply(null, new_num_array))
  } else if (query.toLowerCase().includes("square") && 
             query.toLowerCase().includes("cube")) {
    const new_string = query.replace('?', '');
    const split = new_string.split(':');
    const nums = split[1];
    var num_array = nums.split(',');
    const new_num_array = num_array.map(toNumber);
    for (var num in new_num_array) {
      const new_num = Number(num);
      if (Number.isInteger(Math.sqrt(new_num)) && 
          Number.isInteger(new_num**(1/3))) {
          return String(new_num);
      }
    }
  } else if (query.toLowerCase().includes("muliplied")) {
    const new_string = query.replace('?', '');
    const split = new_string.split('multipled');
    const first = Number(split[2]);
    const second = Number(split[1]);
    return String(first*second);
  } else if (query.toLowerCase().includes("plus")) {
    const new_string = query.replace('?', '');
    const split = new_string.split('plus');
    const first = Number(split[2]);
    const second = Number(split[1]);
    return String(first+second);
  } else if (query.toLowerCase().includes("primes")) {
    const new_string = query.replace('?', '');
    const split = new_string.split(':');
    const nums = split[1];
    var num_array = nums.split(',');
    const new_num_array = num_array.map(toNumber);
    var primes: Number[] = [];
    const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
      }
      return num > 1;
    }
    for (var n in new_num_array) {
      if (isPrime(Number(n))) {
        primes.push(Number(n));
      }
      
    }
    return primes.toString();
  } else if (query.toLowerCase().includes("minus")) {
    const new_string = query.replace('?', '');
    const split = new_string.split('minus');
    const first = Number(split[2]);
    const second = Number(split[1]);
    return String(first-second);
  } else if (query.toLowerCase().includes("power")) {
    const new_string = query.replace('?', '');
    const split = new_string.split('to the power of');
    const first = Number(split[2]);
    const second = Number(split[0]);
    return String(first**second);
  }
  return "";
}
