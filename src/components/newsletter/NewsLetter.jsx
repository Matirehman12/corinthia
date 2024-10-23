export default function NewsLetter() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-1">
                    <div className="mainDiv flex flex-col justify-center items-center">
                        <div className="header max-w-2xl text-center mt-20">
                            <h1 className="text-5xl bg-lightGray w-auto py-10 px-10">STAY IN THE LOOP</h1>
                        </div>

                        <p className="mt-5">Sign up to the Corinthia newsletter</p>

                        <div className="inputDiv flex gap-5 mt-5 items-center">
                            <input
                                type="text"
                                className="mb-2 p-1 border border-gray-300 rounded"
                                placeholder="Enter your email"
                            />
                            <input
                                type="text"
                                className="mb-2 p-1 border border-gray-300 rounded"
                                placeholder="Your name"
                            />
                        </div>


                        <button className="text-2xl  text-black mt-10 ml-60 px-4 py-2 rounded">Submit </button>
                    </div>
                </div>
            </div>
        </>
    )
}