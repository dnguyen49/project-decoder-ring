// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    
    if (!encode) shift *= -1;
    
    let message = input.toLowerCase();
    
    let ans = "";
    
    for (let i=0;i<message.length;i++) {
      let char=message[i];
      
      if (/^[a-z]/.test(char)) {
        let num = message.charCodeAt(i)+shift;
        if (num>122) {
          num-=26;
        }
        else if (num<97) {
          num+=26;
        }
        const newChar = String.fromCharCode(num);
        ans += newChar;
      }
      else {
        ans += char;
      }
    }
    return ans;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
