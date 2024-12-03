import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="flex flex-col justify-center items-center bg-[#34C2A4] text-white font-raleway py-6 px-6">
                <div class="text-2xl pb-4 justify-between cursor-pointer">
                    <i class="fa-brands fa-facebook p-3"></i>
                    <i class="fa-brands fa-instagram p-3"></i>
                    <i class="fa-brands fa-tiktok p-3"></i>
                    <i class="fa-solid fa-envelope p-3"></i>
                    <i class="fa-brands fa-instagram p-3"></i>
                </div>
                <div class="flex flex-col items-center">
                    <h1>© Copyright 2024</h1>
                    <p class="text-center">ASOCIACIÓN CONEXION, Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer