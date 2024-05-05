import useHttps from "../../../hooks/useHttps"
import { useEffect, useState } from "react"
import useToken from "../../../hooks/useToken";
import { useNavigate } from "react-router-dom";
export default function ProfileDetail(){
    const nav = useNavigate();
    const {http} = useHttps();
    const {token} = useToken()
    const [profile, setProfile] = useState()
    const getProfile = async(id)=>{
        await http.get(`/users/${id}`)
        .then((response)=>{
            console.log(response.data);
            setProfile(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if(!token){
            nav('/login')
        }else{
            getProfile(token.user.id)
        }
    },[])
    return <>
    <div className="container mb-4 dis-header">

    </div>
    </>
}