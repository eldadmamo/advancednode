class Database {
    query(sql){
        console.log(`Executing query on real database : ${sql}`);

        return Promise.resolve({id: 1 , name: "Joe Doe"})
    }
}

module.exports = Database;