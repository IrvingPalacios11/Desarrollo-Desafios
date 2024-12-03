import img4 from '../images/4.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img1 from '../images/1.png'
import img5 from '../images/5.png'
import paw from '../images/paws2.png'

const Adopt = () => {
  return (
    <div>
        <section id="adopt"
        className="flex flex-col justify-center font-bold text-white items-center px-10 md:px-20 pt-12 h-full font-raleway">
        <h1 className="text-3xl text-black mb-3 md:mb-10">Adopt Now</h1>
        <div className="flex flex-col md:flex-row justify-center items-center pt-4 md:pb-2">
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#F7E43B] w-full md:w-1/3 p-5 mx-2">
                <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                    <h1 className="text-xl">Archie and siblings</h1>
                    <button className="border text-center border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                        Adopt now
                    </button>
                </div>
                <img src={img4} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt=""/>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#594EFF] w-full md:w-1/3 p-5 mx-2">
                <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                    <h1 className="text-xl">Archie and siblings</h1>
                    <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                        Adopt now
                    </button>
                </div>
                <img src={img2} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt=""/>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#34C2A4] w-full md:w-1/3 p-5 mx-2">
                <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                    <h1 className="text-xl">Archie and siblings</h1>
                    <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                        Adopt now
                    </button>
                </div>
                <img src={img3} className="w-2/3 md:w-1/2 pt-4 md:pt-0" alt=""/>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:pt-2 pb-4">
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#F04F53] w-full md:w-1/2 p-5 mx-2">
                <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                    <h1 className="text-2xl">Archie and siblings</h1>
                    <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                        Adopt now
                    </button>
                    <img src={paw} className="w-1/2 pt-4 hidden md:block" alt=""/>
                </div>
                <img src={img1} className="w-2/2 md:w-1/2 pt-4 md:pt-0" alt=""/>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-[#2A2A68] w-full md:w-1/2 p-5 mx-2">
                <div className="md:pl-5 md:pt-5 flex flex-col items-center md:items-start">
                    <h1 className="text-2xl">Archie and siblings</h1>
                    <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                        Adopt now
                    </button>
                    <img src={paw} className="w-1/2 pt-4 hidden md:block" alt=""/>
                </div>
                <img src={img5} className="w-2/2 md:w-1/2 pt-4 md:pt-0" alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Adopt;