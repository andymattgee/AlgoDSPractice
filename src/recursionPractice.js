//recursion practice problems

function palindromeRecursive(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return palindromeRecursive(str.slice(1, str.length - 1))
}

function reverseStringRecursive(str) {
    if (str.length <= 1) {
        return str
    }
    return reverseStringRecursive(str.slice(1)) + str[0]
}