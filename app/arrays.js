exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
    },

    sum: function(arr) {
        var tot = 0;
        arr.forEach(function(item) {
            tot += item;
        });
        return tot;
    },

    remove: function(arr, item) {
        var newArr = arr.filter(function(elem) {
            return elem !== item;
        });
        return newArr;
    },

    removeWithoutCopy: function(arr, item) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                length--;
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
        var arr2 = [];
        arr.forEach(function(elem) {
            if (arr.indexOf(elem) == index) {
                arr2.push(item);
            }
            arr2.push(elem);
        });
        return arr2;
    },

    count: function(arr, item) {
        var sum = 0;
        arr.forEach(function(elem) {
            if (elem === item) {
                sum++;
            }
        });
        return sum;
    },

    duplicates: function(arr) {
        // Filter only duplicates
        var answ = arr.filter(function(elem) {
            return arraysAnswers.count(arr, elem) > 1;
        });

        var toRet = [];
        answ.forEach(function(elem) {
            if (arraysAnswers.count(toRet, elem) === 0) {
                toRet.push(elem);
            }
        });

        return toRet;
    },

    square: function(arr) {
        var arr2 = [];
        arr.forEach(function(elem) {
            arr2.push(elem * elem);
        });
        return arr2;
    },

    findAllOccurrences: function(arr, target) {
        var answ = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                answ.push(i);
            }
        }
        return answ;
    }
};
