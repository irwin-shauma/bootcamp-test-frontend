export const Role = () => {
    return (
        <>
            <div class="container-lg">
                <p class="h1">Role List</p>

                <a class="btn btn-info" role="button">Add New Data </a>
                <table class="table table-striped table-hover border border-success mt-3">
                    <thead>
                        <tr class="text-center align-middle">
                            <th scope="col">No</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Role Code</th>
                            <th scope="col">Active Status</th>
                            <th scope="col text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center align-middle">
                            <th scope="row">number</th>
                            <td>roleName</td>
                            <td>roleCode</td>
                            <td>AKTIF</td>
                        </tr >
                    </tbody >
                </table >
                <a class="btn btn-primary" href="/login" role="button">BACK</a>
            </div >
        </>
    )
}