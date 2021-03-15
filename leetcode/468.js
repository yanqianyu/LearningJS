/**
 * @param {string} IP
 * @return {string}
 */
function isIPV4(IP) {
    let arr = IP.split(".");
    if (arr.length !== 4) {
        return false;
    }

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            return false;
        }
        if (arr[i].length > 1 && arr[i][0] === '0') {
            return false;
        }
        for(let j = 0; j < arr[i].length; j++) {
            if (!isNum(arr[i][j])) {
                return false;
            }
        }
        let tmp = Number.parseInt(arr[i]);
        if (tmp < 0 || tmp > 255) {
            return false;
        }
    }

    return true;
}

function isNum(c) {
    if (c.charCodeAt() - '0'.charCodeAt() >= 0 && c.charCodeAt() - '9'.charCodeAt() <= 0) {
        return true;
    }
    return false;
}
function isValidChar(c) {
    if (c.charCodeAt() - 'a'.charCodeAt() >= 0 && c.charCodeAt() - 'f'.charCodeAt() <= 0) {
        return true;
    }
    if (c.charCodeAt() - 'A'.charCodeAt() >= 0 && c.charCodeAt() - 'F'.charCodeAt() <= 0) {
        return true;
    }
    return false;
}
function isIPV6(IP) {
    let arr = IP.split(":");
    if (arr.length !== 8) {
        return false;
    }
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0 || arr[i].length > 4) {
            return false;
        }
        for(let j = 0; j < arr[i].length; j++) {
            if (!isNum(arr[i][j]) && !isValidChar(arr[i][j])) {
                return false;
            }
        }
    }
    return true;
}
 var validIPAddress = function(IP) {
     if (isIPV4(IP)) {
         return "IPV4";
     }
     if (isIPV6(IP)) {
         return "IPV6";
     }
     return "Neither";
};

console.log(validIPAddress("20EE:Fb8:85a3:0:0:8A2E:0370:7334"));