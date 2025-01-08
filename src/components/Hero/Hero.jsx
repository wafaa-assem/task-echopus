import image from "../../assets/gym.png";
import { MdLocationPin } from "react-icons/md";
import { IoBarbellOutline } from "react-icons/io5";
import { CiFootball } from "react-icons/ci";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          {/* first element */}
          <div className="col-span-12 lg:col-span-7 bg-white rounded-2xl lg:h-[600px] p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <div className="bg-black h-6 w-4" />
                <div className="bg-primary h-6 w-4" />
              </div>
              <p className="text-black font-bold text-base lg:text-md uppercase tracking-tight">
                Time for Fitness - 23
              </p>
            </div>
            <h1 className="text-black uppercase text-4xl sm:text-6xl md:text-8xl xl:text-[100px] font-bold xl:font-extrabold max-w-sm sm:max-w-[750px]">
              Own Your Strength, Own You
            </h1>
            <div className="flex flex-col sm:flex-row items-start gap-7 sm:gap-20 mt-8 lg:mt-auto">
              <button className="py-3 px-8 md:px-10 bg-black text-white rounded-full uppercase font-medium text-sm">
                Start Your Journey
              </button>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="bg-black/65 w-1 h-3" />
                  <div className="bg-black/75 w-1 h-5" />
                  <div className="bg-black/85 w-1 h-7" />
                  <div className="bg-black/90 w-1 h-8" />
                </div>
                <p className="text-black uppercase font-medium tracking-tight leading-[1.2] text-sm">
                  luxury fitness <br /> experience
                </p>
              </div>
            </div>
          </div>
          {/* second element */}
          <div
            className="col-span-12 lg:col-span-5 rounded-2xl lg:h-[600px] p-8 overflow-hidden bg-center bg-cover flex flex-col justify-between bg-fixed gap-12 lg:bg-scroll"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)) , url(${image})`,
            }}
          >
            <div className="bg-black h-10 w-10 rounded-full aspect-square"></div>
            <h2 className="font-bold uppercase text-xl sm:text-3xl max-w-[300px]">
              train on your own time
            </h2>
          </div>
          {/* third element */}
          <div className="col-span-12 lg:col-span-7 bg-[#E7B2AA] rounded-2xl lg:h-[220px] p-8 flex gap-5">
            <div className="items-center space-x-4 relative hidden md:flex">
              <div className="bg-primary w-[140px] h-[145px] rounded-xl absolute" />
              <div className="bg-black w-[140px] h-[128px] rounded-xl" />
            </div>
            <div className="w-full flex flex-col justify-between gap-6">
              <div className="flex justify-between">
                <p className="text-black text-sm md:text-base uppercase tracking-tight font-medium">
                  24/7 Support
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-black text-sm md:text-base uppercase tracking-tight font-medium text-end max-w-[150px]">
                    12834 Fitness Ln broklyn, NY
                  </p>
                  <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center aspect-square">
                    <MdLocationPin className="text-primary text-xl" />
                  </div>
                </div>
              </div>
              <p className="uppercase text-2xl md:text-3xl font-bold text-black max-w-[300px] leading-[1.1]">
                Contact Us & Rise Stronger
              </p>
            </div>
            <div></div>
          </div>
          {/* fourth element */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl lg:h-[220px] p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-black font-bold text-3xl md:text-5xl">
                  4.98
                </p>
                <div>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-primary"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-primary"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-primary"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-primary"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-primary"
                      defaultChecked
                    />
                  </div>
                  <p className="text-black/65 text-xs font-medium tracking-tight uppercase">
                    based on 619 reviews
                  </p>
                </div>
              </div>
              <div className="bg-black h-10 w-10 rounded-full aspect-square"></div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                boxing ring
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                basketball courts
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase w-7 h-7 aspect-square flex justify-center items-center text-sm">
                <IoBarbellOutline />
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                juice bar
              </div>

              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                personal trainers
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase w-7 h-7 aspect-square flex justify-center items-center text-sm">
                <CiFootball />
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                lockers
              </div>
              <div className="text-black border border-black rounded-full font-medium tracking-tight uppercase flex justify-center items-center px-5 py-1 text-xs whitespace-nowrap">
                free parking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
