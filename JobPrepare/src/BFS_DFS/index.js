function deepFirstSearch(node, nodeList=[]) {
    if (node !== null) {
        nodeList.push(node);
        let children = node.children;
        for(let i = 0; i < children.length; i++) {
            deepFirstSearch(children[i], nodeList);
        }
    }
}

function breadthFirstSearch(node) {
    let nodes = [];
    let queue = [];
    if (node) {
        queue.push(node);
        while(queue.length) {
            let temp = queue.shift();
            let children = temp.children;
            nodes.push(temp);
            for(let i = 0; i < children.length; i++) {
                queue.push(children[i]);
            }
        }
    }
    return nodes;
}

let _toString = Object.prototype.toString;
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    boolean: 'Boolean',
    number: 'Number'
  };

let getType = (item) => {
    return _toString.call(item).slice(8, -1);
}
let isTypeOf = (item, type) =>{
    return map[type] && map[type] === getType(item);
}


// 拷贝函数
function dfsDeepClone(obj, visited = []) {
    let _obj = {};
    if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
        let index = visited.indexOf(obj);
        _obj = isTypeOf(obj, 'array') ? []: {};
        if (~index) {
            _obj = visited[index];
        }
        else {
            visited.push(obj);
            for(let item in obj) {
                _obj[item] = dfsDeepClone(obj[item], visited);
            }
        }
    }
    else if (isTypeOf(obj, 'function')) {
        _obj = eval('(' + obj.toString() + ')');
    } 
    else {
        _obj = obj;
    }
    return _obj;
}

function bfsDeepClone(obj) {
    let origin = [obj],
      copyObj = {},
      copy = [copyObj]
      // 去除环状数据
    let visitedQueue = [],
      visitedCopyQueue = []
    while (origin.length > 0) {
      let items = origin.shift(),
        _obj = copy.shift()
      visitedQueue.push(items)
      if (isTypeOf(items, 'object') || isTypeOf(items, 'array')) {
        for (let item in items) {
          let val = items[item]
          if (isTypeOf(val, 'object')) {
            let index = visitedQueue.indexOf(val)
            if (!~index) {
              _obj[item] = {}
                //下次while循环使用给空对象提供数据
              origin.push(val)
                // 推入引用对象
              copy.push(_obj[item])
            } else {
              _obj[item] = visitedCopyQueue[index]
              visitedQueue.push(_obj)
            }
          } else if (isTypeOf(val, 'array')) {
            // 数组类型在这里创建了一个空数组
            _obj[item] = []
            origin.push(val)
            copy.push(_obj[item])
          } else if (isTypeOf(val, 'function')) {
            _obj[item] = eval('(' + val.toString() + ')');
          } else {
            _obj[item] = val
          }
        }
        // 将已经处理过的对象数据推入数组 给环状数据使用
        visitedCopyQueue.push(_obj)
      } else if (isTypeOf(items, 'function')) {
        copyObj = eval('(' + items.toString() + ')');
      } else {
        copyObj = obj
      }
    }
  return copyObj
}