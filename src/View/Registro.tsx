import Portada from "../images/portada.png";

export default function Registro(){

    return(
        <>
        <div className="bg-primary w-screen h-screen">
          <div className="grid grid-cols-2 h-full items-center">
            <div className="col-span-1 p-10 h-full">
              <div className="flex flex-col tracking-wide text-center text-3xl text-black font-bold gap-4">
                <p>Crea una cuenta</p>
                <p className="text-xl font-medium">Comienza tu aventura</p>
              </div>
          
            </div>
            <div className="col-span-1">
              <img src={Portada} alt="" />
            </div>
          </div>
        </div>
        </>
    )
}