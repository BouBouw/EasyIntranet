import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import CurrentSoftware from "../../functions/GetCurrentSoftware";

export const Informations = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const FetchData = async () => {
            try {
                setData(await CurrentSoftware.CurrentOS());
                console.log(await CurrentSoftware.CurrentOS())
            } catch(err) {
                console.log(err)
            }
        };

        FetchData();
    }, []);

    return(
        <>
            <Header user={ null } title={"Software"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Software <span className="text-[#ff002c]">&gt;</span> Informations
                    </p>
                </div>
                <div className="mt-10">
                    { data ?
                    <section className="">
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">{ data.hostname }</span>
                            <small>
                                { data.distro }
                            </small>
                        </div>
                    </section>
                    :
                    <div className="h-2 bg-white/50 rounded animate-pulse w-32"></div>
                    }
                </div>
            </section>
        </>
    )
}