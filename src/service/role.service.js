import {deleteApi, getApi} from "../common/api"

const getRoles = () => {
    return getApi('http://127.0.0.1:1234/roles')
}

const deleteRoles = (id) => {
    return deleteApi(`http://127.0.0.1:1234/roles/${id}`)
}

export { getRoles,deleteRoles }