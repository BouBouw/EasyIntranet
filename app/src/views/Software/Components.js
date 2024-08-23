import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import CurrentSoftware from "../../functions/GetCurrentSoftware";

export const Components = () => {
    const [ data, setData ] = useState({
        cpu: null,
        ram: [],
        disks: [],
        gpu: null,
        networks: null,
        battery: null
    });

    const FetchCPU = async () => {
        try {
            const newValue = await CurrentSoftware.CurrentCPU();
            setData(prevState => ({
                ...prevState,
                cpu: newValue
            }));
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    };

    const FetchRAM = async () => {
        try {
            const newValue = await CurrentSoftware.CurrentRAM();
            setData(prevState => ({
                ...prevState,
                ram: newValue
            }));
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    }

    const FetchDisks = async () => {
        try {
            const newValue = await CurrentSoftware.CurrentDisks();
            setData(prevState => ({
                ...prevState,
                disks: newValue
            }));
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    }

    const FetchGPU = async () => {
        try {
            const newValue = await CurrentSoftware.CurrentGPU();
            setData(prevState => ({
                ...prevState, 
                gpu: newValue
            }));
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    };

    const FetchNET = async () => {
        try {
            const newValue = await CurrentSoftware.CurrentNET();
            setData(prevState => ({
                ...prevState, 
                networks: newValue
            }));
        } catch (error) {
            console.error('Error fetching CPU value:', error);
        }
    };
    
    useEffect(() => {
        FetchCPU();
        FetchRAM();
        FetchDisks();
        FetchGPU();
        FetchNET();
        console.log(data)
    }, [])

    return(
        <>
            <Header user={ null } title={"Software"} />
            <section className="pl-14 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Software <span className="text-[#ff002c]">&gt;</span> Components
                    </p>
                </div>
                <div className="mt-10">
                    { data ?
                    <section className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500">
                            <span className="font-bold">
                                CPU
                            </span>
                            <ul className="flex flex-col space-y-1 mt-5">
                                <li>
                                    <p>
                                        <strong>
                                            Model :
                                        </strong>&ensp;
                                        {data.cpu?.brand}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Frequency :
                                        </strong>&ensp;
                                        {data.cpu?.speed} GHz (Turbo Boost : { data.cpu?.speedMax} GHz)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Cores :
                                        </strong>&ensp;
                                        {data.cpu?.cores} cores, { data.cpu?.physicalCores } threads
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Socket :
                                        </strong>&ensp;
                                        {data.cpu?.socket}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500">
                            <span className="font-bold">
                                RAM
                            </span>
                            { data.ram?.map((item, index) => (
                                <ul className="flex flex-col space-y-1 mt-5 bg-gray-800/5 p-1">
                                    <li>
                                        <p>
                                            <strong>
                                                Model :
                                            </strong>&ensp;
                                            { item?.manufacturer}
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Capacité :
                                            </strong>&ensp;
                                            { (Math.floor(item?.size / 1073741824)).toFixed(0) } Go
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Types :
                                            </strong>&ensp;
                                            { item?.type }
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Tension :
                                            </strong>&ensp;
                                            { item?.voltageConfigured }
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500">
                            <span className="font-bold">
                                Disks
                            </span>
                            { data.disks?.map((item, index) => (
                                <ul className="flex flex-col space-y-1 mt-5 bg-gray-800/5 p-1">
                                    <li>
                                        <p>
                                            <strong>
                                                Disk Name :
                                            </strong>&ensp;
                                            { item?.name}
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Size :
                                            </strong>&ensp;
                                            { (Math.floor(item?.size / 1073741824)).toFixed(2) } Gb
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Types :
                                            </strong>&ensp;
                                            { item?.interfaceType } • { item?.type === 'SSD' ? item?.type : 'HDD' }
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500">
                            <span className="font-bold">
                                GPU
                            </span>
                            { data.gpu?.controllers.map((item, index) => (
                                <ul className="flex flex-col space-y-1 mt-5 bg-gray-800/5 p-1">
                                    <li>
                                        <p>
                                            <strong>
                                                Model :
                                            </strong>&ensp;
                                            { item?.model }
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Capacity :
                                            </strong>&ensp;
                                            { Math.floor(item?.memoryTotal).toString().charAt(0) } GB
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Virtual Memory :
                                            </strong>&ensp;
                                            { Math.floor(item?.vram).toString().charAt(0) } GB
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500">
                            <span className="font-bold">
                                Connexion
                            </span>
                            { data.networks?.filter(net => net.dhcp === true).map((item, index) => (
                                <ul className="flex flex-col space-y-1 mt-5 bg-gray-800/5 p-1">
                                    <li>
                                        <p>
                                            <strong>
                                                Name :
                                            </strong>&ensp;
                                            { item?.ifaceName }
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Type :
                                            </strong>&ensp;
                                            { item?.type }
                                        </p>
                                    </li>
                                    <li className={`${item?.ip4 !== '' ? 'block' : 'hidden'}`}>
                                        <p>
                                            <strong>
                                                IPv4 :
                                            </strong>&ensp;
                                            { item?.ip4 }
                                        </p>
                                    </li>
                                    <li className={`${item?.ip6 !== '' ? 'block' : 'hidden'}`}>
                                        <p>
                                            <strong>
                                                IPv6 :
                                            </strong>&ensp;
                                            { item?.ip6 }
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Status :
                                            </strong>&ensp;
                                            { item?.operstate === true ? 'Enable' : 'Disable' }
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className={`${data?.battery === null ? "hidden" : "block"} bg-gray-800/5 w-[770px] p-3 rounded-md border-l-2 border-[#ff002c] hover:scale-105 hover:shadow-xl duration-500`}>
                            <span className="font-bold">
                                Battery
                            </span>
                            <ul className="flex flex-col space-y-1 mt-5">
                                <li>
                                    <p>
                                        <strong>
                                            Model :
                                        </strong>&ensp;
                                        {data.cpu?.brand}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Frequency :
                                        </strong>&ensp;
                                        {data.cpu?.speed} GHz (Turbo Boost : { data.cpu?.speedMax} GHz)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Cores :
                                        </strong>&ensp;
                                        {data.cpu?.cores} cores, { data.cpu?.physicalCores } threads
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Socket :
                                        </strong>&ensp;
                                        {data.cpu?.socket}
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