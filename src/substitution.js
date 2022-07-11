// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length!=26) return false;
    const alphabetSet = new Set(alphabet).size;
    if (alphabetSet!=26) return false;
    const newInput = input.toLowerCase();
    if (!encode) {
      let res = [...newInput].map((i) => {
        if (i===' ') return i;
        const charNum = alphabet.indexOf(i)+97;
        return String.fromCharCode(charNum);
      });
      return res.join('');
    }
    else {
      let res = [...newInput].map((i) => {
        if (i===' ') return i;
        const indexString = i.charCodeAt()-97;
        return alphabet[indexString];
      })
      return res.join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
