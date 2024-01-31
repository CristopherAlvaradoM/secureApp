import CardBook from "../Components/CardBook";
import Navbar from "../Components/Navbar";
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
      author: "J.K. Rowling",
    },
    {
      imageUrl: book2,
      title: "Hija de las tinieblas",
      author: "Kiersten White",
    },
    {
      imageUrl: book3,
      title: "Percy Jackson: El ladrón del rayo",
      author: "Rick Riordan",
    },
    {
      imageUrl: book4,
      title: "Maze Runner: La cura mortal",
      author: "Jamas Dashner",
    },
    {
      imageUrl: book5,
      title: "Dune",
      author: "Frank Herbert",
    },
    {
      imageUrl: book6,
      title: "Los Juegos del Hambre - Trilogía",
      author: "RBA",
    },
  ];

  return (
    <>
      <Navbar />
      <body className="min-h-screen w-screen bg-primary">
        <div className="flex flex-wrap items-center justify-center w-full h-full p-7">
          {booksData.map((bookData, index) => (
            <CardBook bookData={bookData} index={index} />
          ))}
        </div>
      </body>
    </>
  );
}
