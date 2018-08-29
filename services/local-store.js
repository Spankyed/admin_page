var LocalStore = function(localStorageService)
{
    return {
        get: function (key) {
            return localStorageService.get(key);
        },
        //should return?
        add: function (key, val) {
            localStorageService.set(key, val);
        },

        remove: function (key) {
            return localStorageService.remove(key);
        },

        getLength: function () {
            return localStorageService.length();
        },

        getKeys: function () {
            return localStorageService.keys();
        },

        clearAll: function () {
            return localStorageService.clearAll();
        },

        setPrefix: function (prefix){
            localStorageService.setPrefix(prefix);
        }
    }
}

app.factory("LocalStore", LocalStore);