import React, { useState } from 'react';
import InputWithLabel from '../Components/InputWithLabel';
import Portada from "../images/portada.png";
import Button from '../Components/Button';

export default function Registro(){

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleButtonClick = () => {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('¡Hicieron clic en el botón!');
  };

    return(
        <>
        <div className="bg-primary w-screen h-screen">
          <div className="grid grid-cols-2 h-full items-center">
            <div className="col-span-1 ">
              <div className="flex flex-col tracking-wide text-center text-3xl text-black font-bold gap-4">
                <p>Crea una cuenta</p>
                <p className="text-xl font-medium">Comienza tu aventura</p>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form>
                  <InputWithLabel
                    label="Nombre"
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <InputWithLabel
                    label="Apellido"
                    id="apellido"
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <InputWithLabel
                    label="Correo"
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                  <InputWithLabel
                    label="Contraseña"
                    id="contrasena"
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                  <div className='my-8'>
                    <Button 
                      onClick={handleButtonClick} 
                      label="Crear cuenta" />
                  </div>
                </form>
                <div className='text-sm text-center text-black font-medium'>
                  Ya tienes una cuenta 
                  <a href="#" className='font-bold text-secondary mx-2' style={{ cursor: 'pointer' }}>
                    Haz clic aquí
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-10">
              <img src={Portada} alt="" />
            </div>
          </div>
        </div>
        </>
    )
}