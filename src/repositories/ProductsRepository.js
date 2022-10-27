import Product from '../models/Product.js'
import ProductsDaoFactory from '../daos/products/ProductDaoFactory.js'
import { asDto } from '../dtos/ProductDTO.js'

export default class ProductsRepository {
    #dao

    constructor() {
        this.#dao = ProductsDaoFactory.getDao()
    }

    async getAll() {
        const products = await this.#dao.getAll()
        return products
    }

    async getById(idBuscado) {
        const dto = await this.#dao.getById(idBuscado)
        return new Product(dto)
    }

    async add(productoNuevo) {
        await this.#dao.save(asDto(productoNuevo))
    }

    async removeById(idBuscado) {
        const removida = await this.#dao.deleteById(idBuscado)
        return new Product(removida)
    }

    async removeAll() {
        await this.#dao.deleteAll()
    }
}