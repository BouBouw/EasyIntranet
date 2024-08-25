import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import Stores from "../../functions/Stores"
import UsersController from "../../functions/Users"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faTrash, faUser } from "@fortawesome/free-solid-svg-icons"

export const Users = () => {
    const [stores, setStores] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        Stores.All().then((result) => {
            setStores(result.data)
        })

        UsersController.All().then((result) => {
            setUsers(result.data)
        })
    }, [])
    return(
        <>
            <Header title={"Developers"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Developers <span className="text-[#ff002c]">&gt;</span> Users
                    </p>
                </div>
                <div className="mt-10">
                    <div className="flex justify-between items-center p-5">
                        <div className="flex flex-row space-x-2">
                            <div className="bg-white p-1 rounded-md">
                                <FontAwesomeIcon icon={ faMagnifyingGlass } className="mx-2" />
                                <input type="text" className="p-1 w-64 outline-none" placeholder="Search user, store..."></input>
                            </div>
                            <select className="p-1 rounded-md">
                                <option value={0}>Tous</option>
                                {stores?.map((item, index) => (
                                    <option value={item?.storeCode}>{ item?.city} ({item?.storeCode})</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-x-2">
                            <button className="bg-red-500/70 text-white font-bold p-2 rounded-md" disabled>
                                <FontAwesomeIcon icon={ faTrash } className="mx-2" />
                                Delete user(s)
                            </button>
                            <button className="bg-blue-500 text-white p-2 rounded-md">
                                <FontAwesomeIcon icon={ faUser } className="mx-2" />
                                Create new user
                            </button>
                        </div>
                    </div>
                    <div className={`space-y-2 p-5` }>
                        <div className="flex justify-between items-center">
                            <span className="font-bold uppercase">
                                Name
                            </span>
                            <span className="font-bold uppercase">
                                Stores
                            </span>
                            <span className="font-bold uppercase">
                                Status
                            </span>
                            <span className="w-4"></span>
                        </div>
                        {users?.map((item, index) => (
                            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                                <div>
                                    { item?.firstName } { item?.lastName }
                                </div>
                                <div>
                                    { stores?.filter(s => s?.storeCode === item?.storeCode)[0].city } ({item?.storeCode})
                                </div>
                                <div>
                                    { item?.permInt === 0 ? 'Employee' : item?.permInt === 1 ? 'Administrator' : 'Developer' }
                                </div>
                                <div className={`space-x-2 items-center`}>
                                    {item?.permInt !== 2 ?
                                    <>
                                        <button>
                                            <FontAwesomeIcon icon={ faTrash } className="bg-red-500 hover:bg-red-600 p-1 text-white rounded-md" />
                                        </button>
                                        <input type="checkbox"></input>
                                    </>
                                    :
                                    <>
                                        <div className="w-10"></div>
                                    </>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}