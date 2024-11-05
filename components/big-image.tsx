import Image from "next/image"

export const BigImage = () =>{
    return(
        <div className="mt-20 bg-[#F1F1F0] w-full justify-center items-center flex md:p-16 ">
            <div className=" bg-white max-w-screen-2xl mx-auto flex md:flex-row flex-col justify-between items-center md:gap-0 gap-16">
                <Image
                    src="/textimg.jpg"
                    alt="textimg"
                    width={600}
                    height={600}
                    className=" p-2 md:w-full"
                />
                <div className="md:px-32 p-2  gap-4 flex flex-col items-start">
                    <h1 className="text-5xl">CLASSIC WINTER COLLECTION</h1>
                    <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
                    <button className="bg-black text-white h-10 w-44">SHOP COLLECTION</button>
                </div>
            </div>
        </div>
    )
}