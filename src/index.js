module.exports = function check(str, bracketsConfig) {
  let strStack = [];
  let flag = true;
  const flatConfig = bracketsConfig.flat();
  let closedBrackets = [];
  let openBrackets = [];

  flatConfig.forEach((element, index) => {
    if(index % 2 !== 0) closedBrackets.push(element)
    else openBrackets.push(element);
  });
  [...str].forEach(element => {
    if(!closedBrackets.includes(element) ||
      (closedBrackets.includes(element) && openBrackets.includes(element) && strStack[strStack.length - 1] !== element)){
      strStack.push(element);
    }else{
      let openBracketIndex = flatConfig.lastIndexOf(element);
      const prevBracket = flatConfig[openBracketIndex - 1];
      let lastSetElement = strStack[strStack.length - 1]
      if(lastSetElement !== prevBracket) flag = false;
      else strStack.pop();
    }
  });
  if(strStack.length > 0) flag = false;
  return flag;
}


