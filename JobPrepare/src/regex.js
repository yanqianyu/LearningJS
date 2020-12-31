let text = " {{title}} {{name}}";
const textRE =  /\{\{(.+?)\}\}/g;

let match;
let index = 0, lastIndex = textRE.lastIndex = 0;
let tokens = [];


    while((match = textRE.exec(text))) {
        tokens.push({
            value: match[1],
            tag: true
        })
    
    }


console.log(tokens);