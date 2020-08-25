
let arr =[1,[1,2,[2,[2,3,[11],2]],3]]
function getFlat(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? getFlat(item) : item)
    },[])
}

function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}


console.log(getFlat(arr));