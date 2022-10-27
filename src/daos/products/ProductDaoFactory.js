import MongoDbProductsDao from './MongoDbProductsDao.js'
import FirebaseProductsDao from './FirebaseProductsDao.js'

const option = process.argv[2] || 'Mongo'

let dao
switch (option) {
    case 'Mongo':
        dao = new MongoDbProductsDao()
        break
    case 'MariaDb':
        dao = new FirebaseProductsDao()
        break
    default:
        dao = new MongoDbProductsDao()
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao
    }
}