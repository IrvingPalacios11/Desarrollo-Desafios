import { useState } from "react";

const Contador = () => {

    const [Cont, setCont] = useState(0);

    const contador = () => {
        setCont(Cont + 1);
    };

    const reset = () => {
        setCont(0);
    };


    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contador</h1>
                <p className="text-xl font-semibold text-gray-600 mb-6">Número: {Cont}</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={contador}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 w-28"
                    >
                        Aumentar
                    </button>
                    <button
                        onClick={reset}
                        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 w-28"
                    >
                        Reiniciar
                    </button>
                </div>
            </div>
        </div>
    );
}
    ;
export default Contador;