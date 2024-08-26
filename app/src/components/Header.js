import { faCloudArrowUp, faCode, faHeadset, faHouse, faMicrochip, faNewspaper, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Auth from "../functions/Auth";

export const Header = ({ title }) => {
    const [view, setView] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        Auth.Controller().then((result) => {
            setUser(result.data.user)
            console.log(result.data.user);
        });

        switch(title) {
            case 'Welcome': {
                document.getElementById('aside_icon.Home').style.color = '#ff002c';
                break;
            };

            case 'Software': {
                document.getElementById('aside_icon.Software').style.color = '#ff002c';
                break;
            }

            case 'Update': {
                document.getElementById('aside_icon.Update').style.color = '#ff002c';
                break;
            }

            case 'Tools': {
                document.getElementById('aside_icon.Tools').style.color = '#ff002c';
                break;
            }

            case 'Developers': {
                document.getElementById('aside_icon.Developers').style.color = '#ff002c';
                break;
            }
        }
    }, []);

    return(
        <>
            <nav className="fixed flex justify-between items-center top-0 z-50 w-full bg-gray-900 border-b border-red-500 p-3">
                <section>
                    <div className="flex flex-row space-x-3 items-center">
                        <img src="https://magasins.easycash.fr/themes/img/og/easycash-facebook.png" alt="Icon" className="w-24  "></img>
                        <span className="font-bold text-white">
                            Computer Manager
                        </span>
                    </div>
                </section>
                <section>
                    { user ?
                        <>
                            <button className="bg-gray-800 text-white p-2 w-52 rounded-md" onClick={(e) => {
                                view ? setView(false) : setView(true);
                            }}>
                                { user.firstName } { (user.lastName).slice(0, 1) }.
                            </button>
                            <div className={`${view ? 'block' : 'hidden'} absolute bg-gray-800 border border-gray-700 p-2 right-3 w-52 mt-1.5 rounded-sm shadow-xl`}>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/#" className="text-white hover:underline underline-offset-2">
                                            Nothing here...
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/logout" className="text-red-400 hover:underline underline-offset-2">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    :
                        <>
                            <a href="/login" className="bg-[#ff002c] text-white font-bold w-32 leading-tight p-2 rounded-md">
                                Connexion
                            </a>
                        </>
                    }
                </section>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen pt-24 transition-transform -translate-x-full bg-gray-900 border-r border-red-500 sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-900">
                <ul className="flex flex-col space-y-2 font-medium">
                    <li>
                        <a href="/home" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 group">
                            <FontAwesomeIcon icon={ faHouse } className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-[#ff002c]" id="aside_icon.Home" />
                            <span className="ms-3 text-white">Home</span>
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                            <FontAwesomeIcon icon={ faMicrochip } className="w-5 h-5 text-gray-500 transition duration-75" id="aside_icon.Software" />
                            <span className="ms-3 text-white">Software</span>
                        </div>
                        <ul className="flex flex-col space-y-2 ml-10">
                            <li>
                                <a href="/software/informations" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Informations
                                </a>
                            </li>
                            <li>
                                <a href="/software/components" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Components
                                </a>
                            </li>
                            <li>
                                <a href="/software/networks" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Networks & Connexion
                                </a>
                            </li>
                            <li>
                                <a href="/software/check-in" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Check-In
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                            <FontAwesomeIcon icon={ faCloudArrowUp } className="w-5 h-5 text-gray-500 transition duration-75" id="aside_icon.Update" />
                            <span className="ms-3 text-white">Update / Upgrade</span>
                        </div>
                        <ul className="flex flex-col space-y-2 ml-10">
                            <li>
                                <a href="/computer/os" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Re-install OS
                                </a>
                            </li>
                            <li>
                                <a href="/computer/drivers" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Windows Update & Drivers
                                </a>
                            </li>
                            <li>
                                <a href="/computer/bios" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Flash Bios & Components
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                            <FontAwesomeIcon icon={ faWrench } className="w-5 h-5 text-gray-500 transition duration-75" id="aside_icon.Tools" />
                            <span className="ms-3 text-white">Tools</span>
                        </div>
                        <ul className="flex flex-col space-y-2 ml-10">
                            <li>
                                <a href="/tools/converter" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Converter
                                </a>
                            </li>
                            <li>
                                <a href="/tools/socials" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    Socials
                                </a>
                            </li>
                            <li>
                                <a href="/tools/to-do" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                    To-Do
                                </a>
                            </li>
                        </ul>
                    </li>
                    { user?.permInt === 2 ?
                        <>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                                <FontAwesomeIcon icon={ faCode } className="w-5 h-5 text-gray-500 transition duration-75" id="aside_icon.Developers" />
                                <span className="ms-3 text-white">Developers</span>
                            </div>
                            <ul className="flex flex-col space-y-2 ml-10">
                                <li>
                                    <a href="/dashboard/users" className="text-gray-100 font-normal underline-offset-2 hover:underline hover:text-[#ff002c]">
                                        Users
                                    </a>
                                </li>
                            </ul>
                        </>
                    :
                        <></>
                    }
                    <li className={`${user?.permInt === 2 ? 'pt-64' : "pt-80"}`}></li>
                    <li>
                        <a href="/support/patch-notes" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 group">
                            <FontAwesomeIcon icon={ faNewspaper } className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-[#ff002c]" id="aside_icon.News" />
                            <span className="ms-3 text-white">Patch Notes</span>
                        </a>
                    </li>
                    <li>
                        <a href="/support/contact" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 group">
                            <FontAwesomeIcon icon={ faHeadset } className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-[#ff002c]" id="aside_icon.Contact" />
                            <span className="ms-3 text-white">Contact</span>
                        </a>
                    </li>
                </ul>
               </div>
            </aside>
        </>
    )
}