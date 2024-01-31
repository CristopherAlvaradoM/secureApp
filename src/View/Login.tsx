import { useState } from 'react';
import Button from '../Components/Button';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    // Validación de usuario y contraseña
    if (username === 'usuario' && password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      // Agrega cualquier lógica adicional que desees ejecutar después de un inicio de sesión exitoso.
    } else {
      console.log('Usuario o contraseña incorrectos');
      // Agrega lógica adicional para manejar un inicio de sesión fallido si lo necesitas.
    }
  };

  return (
    <>
      <div className="flex bg-primary h-screen w-screen min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://th.bing.com/th/id/R.d81b3cb1efb451b7f10b4674d52f985a?rik=3zie82jwaljCHw&pid=ImgRaw&r=0?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia sesión con tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2 py-2">
                <input
                  value={username} onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2 py-2">
                <input
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="py-5">
              <Button onClick={handleClick} label="Iniciar sesión" />
            </div>
        </div>
      </div>
    </>
  )
}