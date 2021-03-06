const callLocalStorage = (key, value) => {
    try{
        if(value) {
            localStorage.setItem(key, JSON.stringify(value));
            return null;
        }
        return JSON.parse(localStorage.getItem(key));
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export {callLocalStorage};
