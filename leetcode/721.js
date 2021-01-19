/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function find(parent, index) {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

function union(parent, index1, index2) {
    parent[find(parent, index2)] = find(parent, index1);
}

var accountsMerge = function(accounts) {
    let emailToIndex = new Map();
    let emailToName = new Map();

    let emailCount = 0;
    for(let account of accounts) {
        let name = account[0];
        let size = account.length;
        for (let i = 1; i < size; i++) {
            let email = account[i];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, emailCount++);
                emailToName.set(email, name);
            }
        }
    }

    let parent = new Array(emailCount).fill(0).map((ele, index) => index);

    for (let account of accounts) {
        let firstEmail = account[1];
        let firstIndex = emailToIndex.get(firstEmail);
        for(let i = 2; i < account.length; i++) {
            let nextEmail = account[i];
            let nextIndex = emailToIndex.get(nextEmail);
            union(parent, firstIndex, nextIndex);
        }
    }

    let indexToEmail = new Map();
    for(let email of emailToIndex.keys()) {
        let index = find(parent, emailToIndex.get(email));
        let account = indexToEmail.get(index) ? indexToEmail.get(index) : [];
        account.push(email);
        indexToEmail.set(index, account);
    }

    let merged = [];
    for (const emails of indexToEmail.values()) {
        emails.sort();
        const name = emailToName.get(emails[0]);
        const account = [];
        account.push(name);
        account.push(...emails);
        merged.push(account);
    }
    return merged;
};
