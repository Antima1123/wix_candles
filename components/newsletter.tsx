export const NewsLetter = () => {
    return(
        <div className="mt-20 w-full h-[25rem] bg-[#f1f1f0]" >

            <form className=" flex flex-col items-center justify-center gap-2  max-w-screen-2xl mx-auto"
            style={
                {backgroundImage: `url("/bg-news.png")`,
                width:"100%",
                height:"100%"}
            }
            >
                <h1 className="text-5xl text-center mb-8">SIGN UP FOR OUR NEWSLATTER</h1>
                <input
                    placeholder="YOUR EMAIL ADDRESS"
                    type="email"
                    className="md:w-1/2 w-[90%] border-1 border-gray-400 p-2 text-gray-500 b outline-none rounded-lg"
                />
                <button className="md:w-1/2 w-[90%] bg-black p-2 text-white text-xl ">SIGN UP</button>
            </form>
        </div>
    )
}