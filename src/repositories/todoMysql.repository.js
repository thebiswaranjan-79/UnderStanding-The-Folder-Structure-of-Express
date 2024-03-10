
class TodoMySQlRepository {
    // below code will not work it is for demo purpose 
    insert(todoText){
        mysql.exec(`INSERT INTO TODOS(todoText) VALUES (${todoText})`)
    }

    getAll(){
        mysql.exec(`SELECT * FROM TODOS`)
    }

    get(id) { 
        mysql.exec(`SELECT * FROM TODOS WHERE id = ${id}`)
    }
}

module.exports = TodoMySQlRepository;