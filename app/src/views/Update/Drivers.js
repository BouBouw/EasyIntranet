import { Header } from "../../components/Header"

export const Drivers = () => {
    return(
        <>
            <Header user={null} title={"Update"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Update / Upgrade <span className="text-[#ff002c]">&gt;</span> Windows Update & Drivers
                    </p>
                </div>
            </section>
        </>
    )
}