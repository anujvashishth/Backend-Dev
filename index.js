//Reverse Words in a Sentence
//Input: "Java is fun" → Output: "fun is Java"

// let string = "Java is fun";

// console.log(string.split(" ").reverse().join(" "));



function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;

  return (str1 + str1).includes(str2);
}

// Test
console.log(isRotation("ABCD", "CDAB")); 
console.log(isRotation("ABCD", "ACBD")); 







