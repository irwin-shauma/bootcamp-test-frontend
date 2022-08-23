import { insertRole } from "../../../service/role.service"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const RoleCreate = () => {
    const [role, setRole] = useState({
        roleName: '',
        roleCode: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setRole((role) => ({
            ...role,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        insertRole(role).then(res => {
            navigate('/roles')
        })
    }

    const navigate = useNavigate()

    return (
        <>
            <div className="container-lg">
                <p className="h1">Role Add</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-md-6 col-sm-12">
                            <label>
                                Role Name :
                                <input
                                    type="text"
                                    className="form-control"
                                    id="roleName"
                                    name="roleName"
                                    value={role.roleName}
                                    placeholder="Add new Role Name"
                                    required
                                    minLength="3"
                                    maxLength="50"
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="mb-3 col-md-6 col-sm-12">
                            <label>
                                Role Code :
                                <input
                                    type="text"
                                    className="form-control"
                                    id="roleCode"
                                    name="roleCode"
                                    placeholder="Add new Role Code"
                                    value={role.roleCode}
                                    required
                                    minLength="3"
                                    maxLength="50"
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <button type="submit" className="btn btn-primary" >Submit</button>

                        </div>
                    </div>
                </form>
            </div>

            <div className="container-lg mt-3">
                <button className="btn btn-primary" onClick={() => {
                    navigate(-1)
                }}>Back</button>
            </div>

        </>
    )

}