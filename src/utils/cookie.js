import Cookies from "js-cookie";

export function getToken(name){
    const acessToken  = Cookies.get(name)
    return acessToken
}

export function  setToken (name, valor) {
    Cookies.set(name,valor)
}

export function  removeToken (name) {
    Cookies.remove(name)
}

