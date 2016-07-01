exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        return new Promise(function(resolve, reject) {
            if (value) {
                resolve(value);
            } else {
                reject(value);
            }
        });
    },

    manipulateRemoteData: function(url) {
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", url);
            request.onload = function() {
                if (request.status == 200) {
                    array = [];
                    result = JSON.parse(request.responseText);
                    for (var i = 0; i < result.people.length; i++) {
                        array.push(result.people[i].name);
                    }
                    resolve(array.sort());
                } else {
                    reject(false);
                }
            };
            request.send();
        });
    }
};
