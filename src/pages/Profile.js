
import { useEffect, useState } from "react"
import { getApi } from "../common/api"

export const Profile = () => {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        getApi('https://reqres.in/api/users?page=1')
            .then((res) => {
                setProfile(res.data)
            })
    }, [])

    const ShowProfile = (props) => {
        return (
            <>
                <div className="flex flex-row card mt-2 text-center col-md-6" >
                    <div className="flex">
                        <img className="mt-2" 
                        style={{'border-radius': '50%'}} 
                        width="100px" 
                        src={props.avatar}
                        alt='avatar'
                        ></img>
                    </div>
                    <div className="card-body flex justify-content-center">
                        <p>{props.first_name} {props.last_name}</p>
                        <p>{props.email}</p>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            {profile.map(data => <ShowProfile
                key={data.id}
                avatar={data.avatar}
                first_name={data.first_name}
                last_name={data.last_name}
                email={data.email}
            />)}
        </>
    )




}

