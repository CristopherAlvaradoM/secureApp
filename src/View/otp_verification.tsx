import Button from "../Components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function OTPVerification() {

    const navigate = useNavigate()
    function goToHome() {
        navigate("/home")
    }

    const [contador, setContador] = useState(90); // Inicia el contador en 90 segundos
    const [reenviar, setReenviar] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (contador > 0) {
                setContador((prevContador) => prevContador - 1);
            } else {
                setReenviar(true);
                clearInterval(intervalId);
            }
        }, 1000);

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente

    }, [contador]);

    const handleReenviar = () => {
        setContador(90);
        setReenviar(false);
    };

    const tiempoRestante = () => {
        const minutos = Math.floor(contador / 60);
        const segundos = contador % 60;

        if (contador >= 60) {
            return `${minutos === 1 ? 'minutos' : 'minuto'}`;
        } else {
            return `${segundos === 1 ? 'segundo' : 'segundos'}`;
        }
    };

    return (
        <>
            <div
                className="flex h-full w-screen min-h-screen flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-white">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Verificación OTP
                    </h2>
                    <p className="text-center mt-10 text-lg">
                        Necesitamos verificar tu identidad mediante un código de 5 dígitos que has recibido vía correo
                        electrónico.
                    </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="grid grid-cols-6 gap-20">
                        <input type="text"
                               className="w-16 h-16 px-4 border border-gray-300 rounded-lg text-black text-center font-semibold text-3xl"
                               maxLength={1}/>
                        <input type="text"
                               className="w-16 h-16 px-4 border border-gray-300 rounded-lg text-black text-center font-semibold text-3xl"
                               maxLength={1}/>
                        <input type="text"
                               className="w-16 h-16 px-4 border border-gray-300 rounded-lg text-black text-center font-semibold text-3xl"
                               maxLength={1}/>
                        <input type="text"
                               className="w-16 h-16 px-4 border border-gray-300 rounded-lg text-black text-center font-semibold text-3xl"
                               maxLength={1}/>
                        <input type="text"
                               className="w-16 h-16 px-4 border border-gray-300 rounded-lg text-black text-center font-semibold text-3xl"
                               maxLength={1}/>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {reenviar ? (
                        <p className="text-md font-semibold text-blue-700 cursor-pointer" onClick={handleReenviar}>
                            Reenviar código
                        </p>
                    ) : (
                        <p className="text-md font-semibold text-gray-500">
                            Reenviar código en {Math.floor(contador / 60)}:{contador % 60 < 10 ? `0${contador % 60}` : contador % 60} {tiempoRestante()}
                        </p>
                    )}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Button label="Verbo jere" onClick={goToHome} />
                </div>

            </div>
        </>
    )
}