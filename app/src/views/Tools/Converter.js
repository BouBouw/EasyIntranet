import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header"
import { faArrowRight, faDownload, faImage, faImages, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export const Converter = () => {
    const [img, setImg] = useState(false)
    const [ext, setExt] = useState("png");
    const inputFileRef = useRef(null);

    async function ResetImage() {
        document.getElementById('imageInput').value = "";
        document.getElementById('ImageExtConvert').innerHTML = "";
        setImg(false);
    }

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            console.log("load")
        })

        async function ChangeImage() {
            const ImageName = await document.getElementById('imageName');
            const ImageExt = await document.getElementById('ImageExt');
            const ImageExtConvert = await document.getElementById('ImageExtConvert');

            console.log(ImageName)

            if (inputFileRef.current) {
                inputFileRef.current.addEventListener('change', function(event) {
                    if (event.target.files[0]?.name) {
                      const FileName = event.target.files[0].name;
                      const fileBaseName = FileName.substring(0, FileName.lastIndexOf('.'));
      
                      setImg(true);
      
                      // console.log(document.getElementById('imageName'))

                      ImageName.innerHTML = `${FileName}`;
                      ImageExt.innerHTML = `${FileName.split('.').pop().toUpperCase()}`;
                      ImageExtConvert.innerHTML = `${fileBaseName}.${ext}`;
      
                      console.log(event.target.files[0]);
                    }
                  });
            }   
        }

        ChangeImage();
    }, [])

    return(
        <>
            <Header user={null} title={"Tools"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Tools <span className="text-[#ff002c]">&gt;</span> Converter
                    </p>
                </div>
                <div className="mt-10">
                    <div>
                        <span>
                            Convert Image :
                        </span>
                        <div className="flex justify-between items-center mt-5 mr-5 bg-white/20 p-3 rounded-md">
                            <div>
                                <div>
                                    { img ?
                                        <>
                                            <div className="">
                                                <span id="imageName"></span>
                                            </div>
                                        </>
                                    :
                                        <>
                                            <label htmlFor="imageInput" className="cursor-pointer bg-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-lg">
                                                <FontAwesomeIcon icon={ faImage } className="mx-2" />
                                                Select image...
                                            </label>
                                            <input type="file" id="imageInput" ref={inputFileRef} className="hidden" accept="image/*"/>
                                        </>
                                    }
                                </div>
                            </div>
                            <div>
                                <ul className="flex flex-row space-x-1 items-center">
                                    <li>
                                        <div className="text-center bg-gray-700 text-gray-100 border border-gray-300 p-3 rounded focus:outline-none w-20" id="ImageExt">
                                            ...
                                        </div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={ faArrowRight } className="text-[#ff002c]" />
                                    </li>
                                    <li>
                                        <select className="text-center bg-gray-700 text-gray-100 border border-gray-300 p-3 rounded focus:outline-none w-20" value={ext} onChange={(e) => {
                                            setExt(e.target.value)
                                        }}>
                                            <option value={"png"}>PNG</option>
                                            <option value={"jpg"}>JPG</option>
                                            <option value={"ico"}>ICO</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className={`${img ? 'block' : 'hidden'} flex flex-row space-x-3 items-center`}>
                                    <li>
                                        <span id="ImageExtConvert"></span>
                                    </li>
                                    <li>
                                        <button className="text-white hover:text-gray-300 bg-blue-500 hover:bg-blue-600 rounded-lg p-3">
                                            <FontAwesomeIcon icon={ faDownload } />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-white hover:text-gray-300 bg-green-500 hover:bg-green-600 rounded-lg p-3">
                                            <FontAwesomeIcon icon={ faImages } />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-white hover:text-gray-300 bg-red-500 hover:bg-red-600 rounded-lg p-3" onClick={(e) => {
                                            ResetImage();
                                        }}>
                                            <FontAwesomeIcon icon={ faTrash } />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <span>
                            Convert Video :
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}