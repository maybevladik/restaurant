import {makeAutoObservable} from "mobx";

export default class DishStore {
    constructor() {
        this._dishes = [
            {userId: 1, nameOfDish: "Coca-cola", description: "Not bad vkys", price: 100, calories: 32.1, typeDish: "Drink" }
        ]
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get User() {
        return this._user
    }
}