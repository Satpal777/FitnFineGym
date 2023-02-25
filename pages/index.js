import Image from "next/image";
import img1 from "../public/img1.webp";
import lifting from "../public/lift.gif";
export default function Home() {
  return (
    <>
      <section
        className="p-4  flex md:flex-row flex-col-reverse md:justify-between justify-center items-center gap-x-10 min-h-screen"
        id="home"
      >
        <div className="h-[100%] md:w-1/2   flex items-start justify-center gap-y-4 flex-col">
          <h1 className="ml-11 font-bold text-3xl md:text-[3rem]  tracking-wide leading-tight">
            Your Ultimate <span className=" text-purple-600">Fitness </span>
            Destination
          </h1>
          <h3 className="ml-11 text-slate-200 font sm:text-xl  tracking-wide">
            Welcome to Iron Haven, your ultimate fitness destination! Our gym is
            equipped with state-of-the-art facilities and experienced trainers
            who are dedicated to helping you achieve your fitness goals.
          </h3>

          <button className="bg-orange-500 text-white mt-2 px-4 py-2 flex items-center gap-x-4 ml-11 tracking-wider hover:scale-105 transform duration-300 shadow-lg shadow-black rounded-md font-semibold">
            Get Started
            <div className="bg-white p-1 rounded-full overflow-hidden">
              <Image src={lifting} width={30} height={30} alt="lifting" />
            </div>
          </button>
        </div>
        <Image
          src={img1}
          unoptimized={true}
          className="md:flex-1 h-fit md:w-96 w-full md:h-full  object-contain md:object-cover"
          width={100}
          height={100}
          alt="image"
        />
      </section>
    </>
  );
}
