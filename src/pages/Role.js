// import { useNavigate } from 'react-router-dom'

export const Role = () => {
    // const navigate = useNavigate


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
                    <tbody>
                        <tr className="text-center align-middle">
                            <th scope="row">number</th>
                            <td>roleName</td>
                            <td>roleCode</td>
                            <td>AKTIF</td>
                        </tr >
                    </tbody >
                </table >
                <a className="btn btn-primary" href="/login" role="button">BACK</a>
            </div >
        </>
    )
}