import MongoDbUsersDao from './MongoDbUsersDao.js'
import FirebaseUsersDao from './FirebaseUsersDao.js'

const option = process.argv[2] || 'Mem'

let dao
switch (option) {
    case 'Mongo':
        dao = new MongoDbUsersDao()
        break
    case 'Firebase':
        dao = new FirebaseUsersDao()
        break
    default:
        dao = new MongoDbUsersDao()
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao
    }
}