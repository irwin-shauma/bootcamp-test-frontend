import { postApi } from "../common/api"

const postLogin = (data) => {
    return postApi('http://127.0.0.1:1234/login', data)
}

export { postLogin }
