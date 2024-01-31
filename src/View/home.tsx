import { FaAngleRight } from "react-icons/fa6";
import {IoSearch} from "react-icons/io5";
import book1 from "../images/libro1.jpeg";
import book2 from "../images/libro2.jpg";
import book3 from "../images/libro3.jpeg";
import book4 from "../images/libro4.jpeg";
import book5 from "../images/libro5.png";
import book6 from "../images/libro6.jpeg";

export default function Home() {

    const booksData = [
        {
            imageUrl: book1,
            title: "Harry Potter y la piedra filosofal",
            author: "J.K. Rowling"
        },
        {
            imageUrl: book2,
            title: "Hija de las tinieblas",
            author: "Kiersten White"
        },
        {
            imageUrl: book3,
            title: "Percy Jackson: El ladrón del rayo",
            author: "Rick Riordan"
        },
        {
            imageUrl: book4,
            title: "Maze Runner: La cura mortal",
            author: "Jamas Dashner"
        },
        {
            imageUrl: book5,
            title: "Dune",
            author: "Frank Herbert"
        },
        {
            imageUrl: book6,
            title: "Los Juegos del Hambre - Trilogía",
            author: "RBA"
        },
    ];


    return(
        <>
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
            <body className="min-h-screen w-screen bg-primary">
                <div className="flex flex-wrap items-center justify-center w-full h-full p-7">
                    {booksData.map((bookData, index) => (
                        <div className="pb-10">
                            <div key={index} className="w-[325px] h-[500px] p-9 bg-complementary mx-8 items-center justify-center">
                                <div className="w-full flex justify-center items-center">
                                    <img src={bookData.imageUrl} alt="" className="w-[225px] h-[350px]"/>
                                </div>
                                <p className="text-center mt-4 font-semibold text-xl">
                                    {bookData.title}
                                </p>
                                <p className="text-center mb-4 text-lg">
                                    {bookData.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </body>
        </>
    )
}