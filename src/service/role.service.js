import { deleteApi, getApi, postApi, putApi } from "../common/api"

const getRoles = () => {
    return getApi('http://127.0.0.1:1234/roles')
}

const getSingleRole = (id) => {
    return getApi(`http://127.0.0.1:1234/roles/${id}`)
}

const insertRole = (data) => {
    return postApi('http://127.0.0.1:1234/roles', data)
}

const updateRole = (data) => {
    return putApi('http://127.0.0.1:1234/roles', data)
}

const deleteRole = (id) => {
    return deleteApi(`http://127.0.0.1:1234/roles/${id}`)
}

export {
    getRoles,
    getSingleRole,
    insertRole,
    updateRole,
    deleteRole
}