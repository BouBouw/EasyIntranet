import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Auth from "../../functions/Auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = () => {
        Auth.Login(email, password).then((result) => {
            navigate('/home');
        })
    }

    return(
        <>
            <div className="absolute left-5 top-5">
                <a href="/home" className="font-bold uppercase hover:text-[#ff002c] hover:underline underline-offset-2">
                    <FontAwesomeIcon icon={ faHouse } className="text-[#ff002c] mx-2" />
                    home
                </a>
            </div>
            <div>
                <div class="flex justify-center items-center min-h-screen">
                    <div class="w-full md:w-full lg:w-1/3">
                        <div class="p-6 bg-white shadow-lg rounded-md">
                            <form action="/login" method="post">
                                <p class="text-left text-lg font-semibold mb-6">
                                    Log in to your space by entering your email and password below.
                                </p>
                                <div class="mb-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
                                    <input type="email" id="email" name="_email" value={email} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff002c] focus:border-[#ff002c] sm:text-sm" placeholder="john.doe@exemple.com" required autofocus onChange={(e) => { setEmail(e.target.value) }}></input>
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                    <input type="password" id="password" name="_password" value={password} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff002c] focus:border-[#ff002c] sm:text-sm" placeholder="******" required onChange={(e) => { setPassword(e.target.value) }}></input>
                                </div>
                                <button type="button" class="w-full py-2 px-4 bg-[#ff002c] text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-[#ff002c] focus:ring-offset-2"onClick={(e) => {
                                    handleSubmit()
                                }}>
                                    Connexion
                                </button>
                                <div class="text-center mt-6">
                                    <a href="/reset-password/" class="text-[#ff002c] hover:underline"><i class="fa-solid fa-key"></i> Forgot Password ?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}