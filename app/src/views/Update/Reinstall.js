import { Header } from "../../components/Header"

export const Reinstall = () => {
    return(
        <>
            <Header user={null} title={"Update"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Update / Upgrade <span className="text-[#ff002c]">&gt;</span> Re-install OS
                    </p>
                </div>
                <div className="space-x-4">
                    <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                        Windows 10
                    </button>
                    <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                        Windows 11
                    </button>
                </div>
            </section>
        </>
    )
}