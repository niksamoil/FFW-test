function parseUrl(string) {

    let indx = string.indexOf('/');
    let indxTwo = string.indexOf('/', indx + 3);
    let indxThree = string.indexOf('?');
    let indxFour = string.indexOf('#');
    let hash, hostName, pathName;


    //added if-else statement for another links
    if(string.includes('#')) {
        hash = string.slice(indxFour);
    } else {
        hash = `Hash doesn't exist`;
    }

    hostName = string.slice(indx + 2, indxTwo);
    pathName = string.slice(indxTwo, indxThree);

    return {
        hostName,
        pathName,
        hash
    }
}


let obj = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');

console.log(obj.hostName);
console.log(obj.pathName);
console.log(obj.hash);


