import { useContext,useState,useEffect } from "react";

import { AuthContext } from "../context/auth";
import { useParams } from "react-router-dom";
import "./../styles/profile.css"
import { RiPhoneLine,RiMailLine } from "react-icons/ri";
type UserInfo = {
    name:string,
    phone:string,
    email:string
}

async function getData(userid:string,setUserInfo:React.Dispatch<React.SetStateAction<UserInfo>>){
    try{
        const backend_url = "http://127.0.0.1:5000/search_single_user?text_search_single_user="+userid
        const data = await((await fetch(backend_url, {mode:'cors'})).json())
        // console.log(data)
        setUserInfo({
            email:data[0][3],
            phone:data[0][2],
            name:data[0][1],
        })
    }
    catch(e){
        console.error("Error")
    }
}
export function ProfilePage(){
    const authState = useContext(AuthContext)
    const {userId} = useParams()
    const [userInfo,setUserInfo] = useState<UserInfo>({
        name:"",
        phone:"",
        email:""
    })
    useEffect(() => {
        if(userId){
            getData(userId,setUserInfo)
        }
    }, [])
    return ( 

        (authState.isLibrarian && userId )?(<>
        <div className="user-profile">
            <div className="profile-img">
                <img src="../profile.png" alt={"User Icon"} ></img>
                <strong className="user-name">{userInfo.name}</strong>
            </div>
            <div className="user-info">
                
                {/* <sub>user #{userId}</sub> */}
                <br></br><br></br>
                <p>
                {/* <strong> Email: </strong>  */}
                <RiMailLine />
                {userInfo.email}
                </p>
                <p>
                {/* <strong> Phone Number: </strong> */}
                <RiPhoneLine/>
                 {userInfo.phone}
                </p>
                </div>
                </div>
        </>)
        :(<h2>User not found!</h2>)
    )
}
