import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const createDish = async (dish) => {
    const { data } = await $authHost.post('api/dish', dish)

    return data
}
export const deleteDish = async (nameOfDish) => {
    const { data } = await $authHost.post('api/dish', nameOfDish)

    return data
}
export const fetchDishes = async (typeDish, page, limit = 3) => {
    const { data } = await $host.get('api/dish', {params: {
            typeDish, page, limit
        }})
    return data
}
export const fetchOneDish = async (dishId) => {
    const { data } = await $host.get('api/dish/' + dishId)
    return data
}
export const fetchType = async () => {
    const { data } = await $host.get('api/type')
    return data
}