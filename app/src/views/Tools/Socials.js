import { Header } from "../../components/Header"

export const Socials = () => {
    return(
        <>
            <Header user={null} title={"Tools"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Tools <span className="text-[#ff002c]">&gt;</span> Socials
                    </p>
                </div>
            </section>
        </>
    )
}