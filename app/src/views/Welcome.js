import { Header } from "../components/Header";

export const Welcome = () => {
    return(
        <>
            <Header user={null} title={"Welcome"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Home
                    </p>
                </div>
            </section>
        </>
    )
};