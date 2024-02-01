import { FaAngleRight } from "react-icons/fa6";
import {IoSearch} from "react-icons/io5";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-white z-50">
                <div className="container mx-auto flex items-center py-7 ">
                    <div className="flex flex-grow justify-between items-center">
                        <div className="relative flex items-center text-gray-500">
                            <IoSearch className="w-5 h-5 absolute ml-4"/>
                            <input type="text" name="search" placeholder="Buscar..."
                                   className="mr-5 py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 bg-complementary rounded-3xl border-2 border-complementary"/>
                        </div>
                        <div className="relative flex justify-center items-center text-gray-500">
                            <div
                                className="flex flex-grow justify-between items-center mr-5 py-2 px-7 font-semibold text-black placeholder-gray-500 bg-complementary rounded-3xl border-2 border-complementary">
                                <p className="font-semibold">Páginas</p>
                                <div className="px-2"></div>
                                <p className="font-light">1 de 10</p>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center text-gray-500">
                            <div
                                className="flex flex-grow justify-between items-center mr-5 py-2 px-7 font-semibold text-black placeholder-gray-500 bg-complementary rounded-3xl border-2 border-complementary">
                                <p className="font-semibold">Géneros</p>
                                <div className="px-4">
                                    <FaAngleRight/>
                                </div>
                                <p className="font-light">Horror</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar