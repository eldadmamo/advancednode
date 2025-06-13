class UserService {
    constructor(database){
        this.database = database;
    }
    getUser(id){
        const db = new Database();
        return db.query(`SELECT * FROM users WHERE id = ${id}`)
    }
}

module.exports  = UserService;