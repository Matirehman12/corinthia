export default function NewsLetter() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-1">
                    <div className="mainDiv flex flex-col justify-center">
                        <div className="header max-w-2xl text-center mt-20">
                            <h1 className="text-4xl font-caslon bg-lightGray w-auto py-10 px-10">STAY IN THE LOOP</h1>
                        </div>

                        <p className="mt-3 font-caslon">Sign up to the Corinthia newsletter</p>

                        <div className="inputDiv flex gap-5 mt-3 items-center">
                            <input
                                type="text"
                                className="mb-2 p-1 border text-black border-gray-300"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                className="mb-2 p-1 border text-black border-gray-300 "
                                placeholder="Email(required)"
                            />
                        </div>


                        <button className="text-1xl font-caslon border-b-2 w-[50px] text-black mt-10 ml-60 px-0 py-0">SUBMIT </button>
                    </div>
                </div>
            </div>
        </>
    )
}