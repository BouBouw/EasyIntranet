import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import CurrentSoftware from "../../functions/GetCurrentSoftware";

export const Components = () => {
    const [ data, setData ] = useState({
        cpu: null,
        ram: null,
        disks: null,
        gpu: null,
        connexion: null,
        battery: null
    });

    const FetchCPU = async () => {
        try {
            const newCpuValue = await CurrentSoftware.CurrentCPU(); // Attendre la valeur du CPU
            setData(prevState => ({
                ...prevState,       // Conserver les valeurs précédentes
                cpu: newCpuValue    // Mettre à jour la propriété cpu avec la nouvelle valeur
            }));
            console.log(data); // Afficher la nouvelle valeur du CPU
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    };
    
    useEffect(() => {
        FetchCPU()
    }, [])

    return(
        <>
            <Header user={ null } title={"Software"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Software <span className="text-[#ff002c]">&gt;</span> Components
                    </p>
                </div>
                <div className="mt-10">
                    { data ?
                    <section className="">
                        <div className="">
                            <span className="font-bold">
                                CPU
                            </span>
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <p>
                                        <strong>
                                            Model :
                                        </strong>&ensp;
                                        {data.cpu?.brand}
                                    </p>
                                </li>
                            </ul>
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