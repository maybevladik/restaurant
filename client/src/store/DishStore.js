import {makeAutoObservable} from "mobx";

export default class DishStore {
    constructor() {
        this._dishes = []
        this._types = []
        this._orders = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setDeletedOrder(order){
        this._orders = this._orders.filter(r => r.dishId !== order)
    }
    setDeleteAllOrder(){
        while (this._orders.length !== 0){
            this._orders.pop()
        }
    }
    get selectedType(){
        return this._selectedType
    }
    setDishes(dishes){
        this._dishes = dishes
    }
    setOrder(orders){
        this._orders.push(orders)
    }
    setTypes(types) {
        this._types = types
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
    get types(){
        return this._types
    }
    get dishes() {
        return this._dishes
    }
    get orders(){
        return this._orders
    }
}