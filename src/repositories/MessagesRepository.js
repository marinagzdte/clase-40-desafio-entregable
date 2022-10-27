import Message from '../models/Message.js'
import MessageDaoFactory from '../daos/messages/MessageDaoFactory.js'

export default class MessagesRepository {
    #dao

    constructor() {
        this.#dao = MessageDaoFactory.getDao()
    }

    async getAll() {
        return await this.#dao.getAll()
    }

    async getById(idBuscado) {
        const dto = await this.#dao.getById(idBuscado)
        return new Message(dto)
    }

    async add(mensajeNuevo) {
        await this.#dao.save(mensajeNuevo)
    }

    async removeById(idBuscado) {
        const removida = await this.#dao.deleteById(idBuscado)
        return new Message(removida)
    }

    async removeAll() {
        await this.#dao.deleteAll()
    }
}