import { useState } from "react"
import Auth from "../../functions/Auth"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        Auth.Login(email, password)
    }

    return(
        <>
            <div>
                <form className="">
                    <input type="email" className="" placeholder="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="password" className="" placeholder="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                </form>
                <button onClick={(e) => {
                    handleSubmit()
                }}>
                    Envoyer
                </button>
            </div>
        </>
    )
}