// Set state title, page, results, prev(previous route)

function setState(item, value) {
    sessionStorage.setItem(item,JSON.stringify(value));
}

function getState(item) {
   return JSON.parse(sessionStorage.getItem(item));
}

export {getState, setState}

 
