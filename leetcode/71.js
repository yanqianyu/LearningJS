/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let arr = path.replace(/\/{2,}/g,"/").split("/").filter((item)=>{return item != "." })
    let res=[]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != ".." && arr[i] != ""){
            res.push(arr[i])
        }
        else if(arr[i] == ".."){
            res.pop()
        }
    }
    return "/"+res.join("/")
};