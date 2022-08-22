// import { useNavigate } from 'react-router-dom'

// import axios from '../interceptor/custom.interceptor'
import { getRoles, deleteRoles } from '../../../service/role.service'
import { useEffect, useState } from 'react'

export const Role = () => {
    const [role, setRole] = useState([])
    let roleId;

    useEffect(() => {
        getRoles().then((res) => {
            setRole(res.data)
        })
    }, [])

    const getRoleId = (Id) => {
        roleId = Id
    }

    const deleteRole = (Id) => {
        deleteRoles(Id).then(() => {
            getRoles().then((res) => {
                setRole(res.data)
            })
        })
    }


    const ShowRoles = (props) => {
        return (
            <>
                <tbody>
                    <tr className="text-center align-middle">
                        <th scope="row">{props.index + 1}</th>
                        <td>{props.roleName}</td>
                        <td>{props.roleCode}</td>
                        <td>{props.isActive ? 'AKTIF' : 'NONAKTIF'}</td>
                        <td>
                            <button className="btn btn-info" >Edit</button>
                            <button className="btn btn-danger ms-2" onClick={() => getRoleId(props.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                        </td>
                    </tr >
                </tbody >
            </>
        )
    }

    return (
        <>
            <div className="container-lg">
                <p className="h1">Role List</p>
                <button className="btn btn-info">Add New Data </button>
                <table className="table table-striped table-hover border border-success mt-3">
                    <thead>
                        <tr className="text-center align-middle">
                            <th scope="col">No</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Role Code</th>
                            <th scope="col">Active Status</th>
                            <th scope="col text-center">Actions</th>
                        </tr>
                    </thead>
                    {
                        role.map((data, index) => <ShowRoles key={data.id} index={index} {...data} />)
                    }
                </table >

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete Role</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure to delete this role?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={() => deleteRole(roleId)} data-bs-dismiss="modal">YES</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
                            </div>
                        </div>
                    </div>
                </div>


                <a className="btn btn-primary" href="/login" role="button">BACK</a>
            </div >
        </>
    )
}