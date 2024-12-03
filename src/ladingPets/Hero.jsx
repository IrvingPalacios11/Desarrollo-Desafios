import img1 from '../images/dog3.png'
import img2 from '../images/dog5.png'
import img3 from '../images/cat1.png'

const Hero = ({img1, img2, img3}) => {
  return (
    <div>
        <section className="flex flex-col justify-center items-center mt-40 md:mt-32">
        <div className="flex flex-col justify-center items-center pt-8">
            <h1 className="font-merriweather text-center text-2xl md:text-4xl pb-4">A smarter pet pharmacy</h1>
            <p className="font-medium text-center">HUMAN-GREAT QUALITY. WALLET-FRIENDLY PRICES.</p>
            <button
                className="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base text-white font-medium bg-[#2A2A68] hover:bg-[#594eff] mt-2 md:mt-5 mb-2 md:mb-0">START
                YOUR PLAN</button>
        </div>
        <div className="flex flex-row w-full justify-center items-center mt-2">
            <img src={img1} className="w-1/3 md:w-1/4 hidden md:block" alt=""/>
            <img src={img2} className="w-1/3 md:w-1/5 " alt=""/>
            <img src={img3} className="w-1/3 md:w-1/5" alt=""/>
        </div>
    </section>
    </div>
  )
}

export default Hero;