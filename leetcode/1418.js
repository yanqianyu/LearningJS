/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
 var displayTable = function(orders) {
     let res = new Map();
     let final = new Array();
     let allFood = new Array();
    
     for(let order of orders) {
         let table = order[1], food = order[2];
         if (allFood.indexOf(food) === -1) {
             allFood.push(food);
         }
         if (res.has(table)) {
             let old = res.get(table);
             old.set(food, old.get(food) || 0 + 1);
         }
         else {
             res.set(table, new Map().set(food, 1));
         }
     } 
     
     allFood.sort();
     allFood.unshift("Table");
     final.push(allFood);
     let temp = new Array();
     for(let table of res.keys()) {
         let orders = new Array(allFood.length).fill(0);
         orders[0] = table;
         let tableFood = res.get(table);
         for(let food of tableFood.keys()) {
             let idx = allFood.indexOf(food);
             orders[idx] = tableFood.get(food);
         }
         temp.push(orders);
     }
     temp.sort((a, b) => a[0] - b[0]);
     return final.concat(temp);
};