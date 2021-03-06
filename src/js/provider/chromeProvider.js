class ChromeProvider {
    constructor(database) {
        this.database = database;
    }
    // Adding a method to the constructor
    save(data,callback) {
        return this.database.storage.local.set(data, callback());;
    }

    get (key,callback) {
        this.database.storage.local.get([key], function(key) {
            return callback(key)
          });
    }
}