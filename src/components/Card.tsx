import { useState, useEffect } from 'react';


export function Card() {
    const [copos, setCopos] = useState(0);
    const meta = 8
    const progress = (copos / 8) * 100

    useEffect(() => {
        if (copos >= meta) {
            alert('Meta alcançada')
            setCopos(0)
        }
    }, [copos])


    return (
        <div className='flex flex-col items-center bg-white max-w-sm mx-auto px-6 py-6 rounded overflow-hidden shadow-lg'>
            <h1>Controle de Água</h1>
            <div className='flex flex-row items-center justify-center gap-4 px-4'>
                <h4>Faltam: {meta - copos}</h4>
                <h4>Bebidos: {copos}</h4>
            </div>

            {/* Barra de Progresso */}
            <div className="w-full bg-gray-200 h-4 rounded-full mb-4">
                <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/*Ilustracao Copo*/}
            <div className="relative w-20 h-40 border-3 border-blue-300 rounded-b-3xl overflow-hidden mb-4 bg-white">
                <div
                    className="absolute bottom-0 left-0 w-full bg-blue-400 transition-all duration-500"
                    style={{ height: `${progress}%` }}
                />
            </div>


            <div className='flex items-center justify-center py-2'>
                <button type="button"
                    className="bg-[#c8e2ef] inline-block rounded-sm  px-3 py-1 text-sm font-medium text-blue-600 transition hover:scale-110 hover:shadow-xl cursor-pointer" onClick={() => setCopos(copos + 1)}>
                    Adicionar
                </button>



            </div>

        </div>
    )
};
