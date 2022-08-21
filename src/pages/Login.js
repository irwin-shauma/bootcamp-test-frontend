
import { useState } from "react"
import { postLogin } from "../service/login.service"

export const Login = (props) => {
    const [login, setLogin] = useState({
        userUsername: '',
        userPassw: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        const updatedValue = {
            [name]: value
        }

        setLogin(login => ({
            ...login,
            ...updatedValue
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postLogin(login).then(res => console.log(res))
    }

    const { userUsername, userPassw } = login

    return (
        <>
            <div class="container-lg position-absolute top-50 start-50 translate-middle mx-auto text-center ">
                <h1 class="d-grid row col-12">Silahkan Login</h1>

                <form onSubmit={handleSubmit}>
                    <img src="/assets/images/login.png" class="rounded mx-auto d-block img-fluid w-25 mb-3" alt="login" />
                    <div class="mb-3 row d-flex justify-content-center">
                        <div class="col-6">
                            <input
                                type="text"
                                class="form-control"
                                id="staticEmail"
                                placeholder="Email"
                                name="userUsername"
                                value={userUsername}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="mb-3 row d-flex justify-content-center">
                        <div class="col-6">
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Password"
                                name="userPassw"
                                value={userPassw}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center mx-auto ">
                        <div class="col-md-6 col-sm-12 w-25">
                            <button
                                type="submit"
                                value='Submit'
                                class="btn btn-primary w-50"
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}