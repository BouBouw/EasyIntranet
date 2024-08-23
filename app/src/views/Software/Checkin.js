import { Header } from "../../components/Header"

export const Checkin = () => {
    return(
        <>
            <Header user={null} title={"Software"} />
            <section className="pl-12 mt-20 sm:ml-64">
            <div id="path">
                    <p className="font-bold text-gray-600">
                        Software <span className="text-[#ff002c]">&gt;</span> Check-In
                    </p>
                </div>
            </section>
        </>
    )
}