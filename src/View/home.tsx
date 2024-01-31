export default function Home() {
    return(
        <>
            <nav className="sticky top-0 w-full bg-white z-50">
                <div className="container mx-auto flex items-center py-6 ">
                    <div className="flex flex-grow justify-between items-center">
                        <div className="relative flex items-center text-gray-500">
                            <input type="text" name="search" placeholder="Buscar..."
                                   className="mr-5 py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 rounded-lg border-none ring-2 ring-gray-300"/>
                        </div>
                    </div>
                </div>
            </nav>
            <body className="min-h-screen w-screen bg-primary">

            </body>
        </>
    )
}