/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    const map = new Map();
    for (const employee of employees) {
        map.set(employee.id, employee);
    }
    const dfs = (id) => {
        const employee = map.get(id);
        let total = employee.importance;
        const subordinates = employee.subordinates;
        for (const subId of subordinates) {
            total += dfs(subId);
        }
        return total;
        
    }

    return dfs(id);
};