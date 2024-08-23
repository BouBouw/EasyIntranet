import { Header } from "../components/Header";

export const Welcome = () => {
    return(
        <>
            <Header user={null} title={"Welcome"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <h1 className="text-red-500">
                    Home
                </h1>
            </section>
        </>
    )
};