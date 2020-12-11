/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiant = [];
    let dire = [];
    let n = senate.length;
    for(let i = 0; i < n; i++) {
        let c = senate[i];
        if (c === 'R') {
            radiant.push(i);
        }
        else {
            dire.push(i);
        }
    }

    while(radiant.length > 0 && dire.length > 0) {
        let r = radiant.shift();
        let d = dire.shift();
        if (r < d) {
            radiant.push(r + n);
        }
        else {
            dire.push(d + n);
        }
    }
    return radiant.length === 0 ? "Dire" : "Radiant";
};