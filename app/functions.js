exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn.apply(fn, arr);
    },

    speak: function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction: function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures: function(arr, fn) {
        var res = [];

        var sqr = function(x) {
            return function() {
                return fn(x);
            };
        };
        arr.forEach(function(elem) {
            res.push(sqr(elem));
        });
        return res;
    },

    partial: function(fn, str1, str2) {
        return function(punctuation) {
            return fn.call(this, str1, str2, punctuation);
        };
    },

    useArguments: function() {

    },

    callIt: function(fn) {

    },

    partialUsingArguments: function(fn) {

    },

    curryIt: function(fn) {

    }
};
