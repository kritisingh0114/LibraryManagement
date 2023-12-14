import { useContext, useState } from "react"
import { AuthContext } from "../context/auth"
import "./../styles/login.css"
import { RiErrorWarningFill } from "react-icons/ri"

export function LoginPage() {
	const authState = useContext(AuthContext)


    const [error,setError] =useState("")

    const backend_url = "http://127.0.0.1:5000/login_librarian"

    async function submitLogin(){
        const email = (document.getElementById("login-email") as HTMLInputElement).value
        const pw = (document.getElementById("login-password") as HTMLInputElement).value
        if(email==="" || pw === ""){
            setError("Enter email and password")
            return
        }
        
        const formdata = new FormData()
        formdata.append("username",email)
        formdata.append("password",pw)
        try{
            const data = await((await fetch(backend_url, {
                method: "POST",
                mode:'cors',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify({
                    username:email,
                    password:pw
                })
            })).json())
            if(data.length === 0){
                setError("Wrong email or password")
            }
            else{
                const userid = data[0][0]
                sessionStorage.login=true
                sessionStorage.userId=userid
                window.location.href="/"
            }
        }
        catch(e){
            setError("Server Error")
        }
        
    }

	return (
		<>
			<div className="signin">
				<div className="content">
					<h2>Librarian Log In</h2>

					<div className="form">
						<div className="inputBox">
							<input type="text" id="login-email"/>
								<i>Email</i>
						</div>

						<div className="inputBox">
							<input type="password" id="login-password"/>
								<i>Password</i>
						</div>

						<div className="links">
                            {error!=="" && (<a id="login-error"><RiErrorWarningFill /> {error}</a>)}
                            
							{/* <a href="#">Forgot Password</a> <a href="#">Signup</a> */}
						</div>

						<div className="inputBox">
							<input type="submit" value="Login" onClick={submitLogin}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
