import React from 'react'
import img from '../images/iconperson.png';


const Reviews = (props) => {
    return (
        <div>
            <section id="reviews" class="flex flex-col items-center justify-center px-6 md:px-20 pb-12 w-full font-raleway">
                <div class="w-full flex items-center justify-center mb-10">
                    <h1 class="text-3xl text-black font-bold">Reviews</h1>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <div class="w-full md:w-1/2 bg-[#F7E43B] py-6 px-6 md:mr-3 mb-2 md:mb-0">
                        <div>
                            <i class="fa-solid fa-quote-right text-3xl"></i>
                            <p class="text-sm md:text-base">{props.rev}</p>
                        </div>
                        <div class="flex flex-row pt-5">
                            <img src={img} class="w-20 px-4" alt="" />
                            <div>
                                <h1 class="font-bold">Lorem, ipsum.</h1>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 bg-[#F7E43B] py-6 px-6 md:ml-3">
                        <div>
                            <i class="fa-solid fa-quote-right text-3xl"></i>
                            <p class="text-sm md:text-base">{props.rev}</p>
                        </div>
                        <div class="flex flex-row pt-5">
                            <img src={img} class="w-20 px-4" alt="" />
                            <div>
                                <h1 class="font-bold">Lorem, ipsum.</h1>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reviews