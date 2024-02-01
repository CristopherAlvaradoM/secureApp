export default function OTPVerification() {
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
                    <p className="text-md font-semibold text-blue-700">Reenviar código en 1:30 minutos</p>
                </div>

            </div>
        </>
    )
}