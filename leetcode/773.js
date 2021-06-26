/**
 * @param {number[][]} board
 * @return {number}
 */
 var slidingPuzzle = function(board) {
     let seen = new Set();
     const queue = [[...board[0], ...board[1]].join("")];
     let steps = 0;
     while(queue.length) {
         const len = queue.length;
         for(let i = 0; i < len; i++) {
             const item = queue.shift();
             if (item === "123450") {
                 return steps;
             }
             seen.add(item);
             shiftAndPush(item, 1, queue, seen);
             shiftAndPush(item, 2, queue, seen);
             shiftAndPush(item, 3, queue, seen);
             shiftAndPush(item, 4, queue, seen);
         }
         steps += 1;
     }
     return -1;
};

function shiftAndPush(str, direct, arr, set) {
    const chars = str.split("");
    const pos = chars.findIndex((one) => one === "0");
    if (pos < 3 && direct === 1) return;
    if (pos % 3 === 2 && direct === 2) return;
    if (pos > 2 && direct === 3) return;
    if (pos % 3 === 0 && direct === 4) return;
  
    if (direct === 1) swap(chars, pos, pos - 3);
    if (direct === 2) swap(chars, pos, pos + 1);
    if (direct === 3) swap(chars, pos, pos + 3);
    if (direct === 4) swap(chars, pos, pos - 1);
  
    const nextStr = chars.join("");
    if (set.has(nextStr)) return;
    arr.push(nextStr);
  }
  
  function swap(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }