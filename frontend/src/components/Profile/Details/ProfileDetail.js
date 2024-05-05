import useHttps, { imgUrl } from "../../../hooks/useHttps"
import { useEffect, useState } from "react"
import useToken from "../../../hooks/useToken";
import { useNavigate } from "react-router-dom";
export default function ProfileDetail() {
    const nav = useNavigate();
    const { http } = useHttps();
    const { token } = useToken();
    const [profile, setProfile] = useState()

    const getProfile = async (id) => {
        await http.get(`/users/${id}`)
            .then((response) => {
                console.log(response.data);
                setProfile(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (!token) {
            nav('/login')
        } else {
            getProfile(token.user.id)
        }
    }, [])
    return <>
        <div className="container mb-4 dis-header">
            <h1 className="mb-5">
                Votre profil
            </h1>
            <div className="d-flex">
                <div className="pfp">
                    {
                        profile && profile.pdp
                            ?
                            <img className="img-h" src={imgUrl + profile.pdp} alt="pfp" /> : ""
                    }

                </div>
                <div>
                    {
                        profile && profile.pdp ? <>
                            <h3 className="ms-3">{profile.name} <span className="badge bg-secondary">{profile.type.toUpperCase()}</span></h3>
                            <p className="ms-3">{profile.email}</p>
                        </>
                            : ""}
                </div>
            </div>
        </div>

    </>
}