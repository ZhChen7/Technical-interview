var isPalindrome = function(s) {
    if (s.length === 1) return true
    const str = s.replace(/\W/g, "").toLowerCase()
    console.log(str)
    const strReverse = str.split('').reverse().join('')
    return str === strReverse
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))