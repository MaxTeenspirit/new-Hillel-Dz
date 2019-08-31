//>>>>>>>>>>> EVERY >>>>>>>>>>

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function every(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        var result = callback(array[index], index, array);
        if (result) {
            result;
        }
        return result;
    }
}

console.log('Every ' + every(array, function(el){
    return el < 10;
}));


//>>>>>>>>>>>> SOME >>>>>>>>>>>

function some(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        var result = callback(array[index], index, array);
        if (result === true || result === false) {
            result;
        }
        return result;
    }
}

console.log('Some ' + some(array, function(element){
    return element < 10;
}));


//>>>>>>>>> REDUCE >>>>>>>>

var reduce = function(arr, callback, startValue) {
    var result = startValue;
    for (var index = 0; index < array.length; index++) {
      result = callback.call(null, result, array[index], index, array);
    }
    return result;
  };

console.log('Reduce ' + reduce(array, function(sum, element){
    return sum + element;
}, 0));