import MongoDbMessagesDao from './MongoDbMessagesDao.js'
import FirebaseMessagesDao from './FirebaseMessagesDao.js'

const option = process.argv[2] || 'Mem'

let dao
switch (option) {
    case 'Mongo':
        dao = new MongoDbMessagesDao()
        break
    case 'MariaDb':
        dao = new FirebaseMessagesDao()
        break
    default:
        dao = new MongoDbMessagesDao()
}

export default class MessageDaoFactory {
    static getDao() {
        return dao
    }
}