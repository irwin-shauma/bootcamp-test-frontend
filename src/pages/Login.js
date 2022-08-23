
import { useState } from "react"
import { postLogin, saveData } from "../service/login.service"
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        userUsername: '',
        userPassw: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        const updatedValue = {
            [name]: value
        }

        setLogin((login) => ({
            ...login,
            ...updatedValue
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postLogin(login).then(res => {
            redirectAfterLogin(res)
        })
    }


    const redirectAfterLogin = (response) => {
        if (response.data.roleCode === "SA1") {
            saveData(response.data)
            navigate('/roles')
        }
        // else if (response.data.roleCode === "HR2") {
        //     this.loginService.saveData(response)
        //     this.router.navigateByUrl("/candidates")

        // } else if (response.data.roleCode === "REV3") {
        //     this.loginService.saveData(response)
        //     this.router.navigateByUrl("/reviewer-home")

        // } else if (response.data.roleCode === "CAN4") {
        //     this.loginService.saveData(response)
        //     this.router.navigateByUrl("/candidate-home")
        // }
    }

    const { userUsername, userPassw } = login

    return (
        <>
            <div className="container-lg position-absolute top-50 start-50 translate-middle mx-auto text-center ">
                <h1 className="d-grid row col-12">Silahkan Login</h1>

                <form onSubmit={handleSubmit}>
                    <img src="/assets/images/login.png" className="rounded mx-auto d-block img-fluid w-25 mb-3" alt="login" />
                    <div className="mb-3 row d-flex justify-content-center">
                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                placeholder="Email"
                                name="userUsername"
                                value={userUsername}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row d-flex justify-content-center">
                        <div className="col-6">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                name="userPassw"
                                value={userPassw}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mx-auto ">
                        <div className="col-md-6 col-sm-12 w-25">
                            <button
                                type="submit"
                                value='Submit'
                                className="btn btn-primary w-50"
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}