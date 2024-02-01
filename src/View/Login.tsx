import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Portada from '../images/portada.png';

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (username === 'Mombe' && password === '1234') {
      console.log('Inicio de sesión exitoso');
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
      console.log('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <div className=" bg-primary h-screen w-screen justify-center">
        <div className='grid grid-cols-2 w-full h-full items-center'>
          <div className='col-span-1'>
            <img src={Portada} alt="portada" />
          </div>

          <div className='col-span-1'>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <label className='block font-semibold text-5xl leading-6 text-gray-900 pb-12 text-center'>
                Inicio de sesión
              </label>
              <div className='grid text-center font-semibold text-3xl leading-6 text-gray-900 pb-8 space-y-4'>
                <span>Comienza una lectura</span>
                <span>Comienza una aventura</span>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electrónico
                </label>
                <div className="mt-2 py-2">
                  <input
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingrese su correo o usuario"
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    type='password'
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña"
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="py-5">
                <Button onClick={handleClick} label="Iniciar sesión" />
              </div>
              <div className="flex items-center mb-6">
                <span className="flex-grow border-t-2 border-black"></span>
                <span className="mx-2 text-black">O</span>
                <span className="flex-grow border-t-2 border-black"></span>
              </div>
              <div>
                <div className="flex justify-center space-x-2">
                  {/* Aquí puedes agregar botones para iniciar sesión con otras cuentas */}
                  <div>
                    <img
                      src="https://th.bing.com/th/id/R.8ef8e7517ce4e8ba5c30c0e649892441?rik=zPhFeozXzx2JnA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fapple-logo-with-transparent-background%2fapple-logo-with-transparent-background-6.png&ehk=fSbG5Or%2fxBZKjc1PjZHudjEHxY17Oi%2foigXAWBgAvo0%3d&risl=&pid=ImgRaw&r=0"
                      alt="Apple"
                      className="w-12 h-12 object-contain rounded-full cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0"
                      alt="Google"
                      className="w-12 h-12 object-contain rounded-full cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="https://fst.ut.ac.id/wp-content/uploads/2022/04/facebook-png-e1648913421835-1030x1027.png"
                      alt="Facebook"
                      className="w-12 h-10 object-contain rounded-full cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}