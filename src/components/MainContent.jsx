import amex from '../assets/MainContent-assets/amex.svg';
import applePay from '../assets/MainContent-assets/apple-pay.svg';
import arrow from '../assets/MainContent-assets/arrow.svg';
import dot from '../assets/MainContent-assets/dot.svg';
import gpay from '../assets/MainContent-assets/gpay.svg';
import imagePreview from '../assets/MainContent-assets/image-preview.svg';
import image from '../assets/MainContent-assets/image.svg';
import line from '../assets/MainContent-assets/line.svg';
import mastercard from '../assets/MainContent-assets/mastercard.svg';
import middleLine from '../assets/MainContent-assets/middle-line.svg';
import padlock from '../assets/MainContent-assets/padlock.svg';
import paypal from '../assets/MainContent-assets/paypal.svg';
import percent from '../assets/MainContent-assets/percent.svg';
import rectangle from '../assets/MainContent-assets/rectangle.svg';
import satisfaction from '../assets/MainContent-assets/satisfaction.svg';
import shopPay from '../assets/MainContent-assets/shop-pay.svg';
import starts from '../assets/MainContent-assets/starts.svg';
import tickCircle from '../assets/MainContent-assets/tick-circle.svg';
import verified from '../assets/MainContent-assets/verified.svg';
import visa from '../assets/MainContent-assets/visa.svg';

export const MainContent = () => {
  return (
    <div className="bg-white xl:bg-middleGray mx-4 lg:mx-10 xl:mx-20 rounded-2xl flex flex-col lg:flex-row p-4 lg:p-5 xl:p-6 gap-0 sm:gap-4 lg:gap-6">

        {/* First Section */}
        <div className="lg:basis-1/2 m-0 sm:m-[10px] font-manrope">
            <img src={image} alt="image" className="hidden lg:block h-[571px] w-[555px]"/>
            <div className="bg-white w-[555px] mt-[20px] rounded-[10px] p-[24px] hidden lg:block">
                <div className="flex gap-[13px]">
                    <img src={rectangle} alt="image" />
                    <div className="flex flex-col self-center">
                        <div>
                            <img src={starts} alt="starts" />
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <p className="text-[14px] text-gray font-bold">Ken T.</p>
                            <div className="flex items-center gap-[8px]">
                                <img src={verified} alt="verified" className="h-[16px] w-[16px]"/>
                                <p className="text-greenCyan text-[10px]">Verified Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch text-gray mt-[18px]">
                    <p className="text-[16px]">
                        “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                    </p>
                </div>
            </div>
        </div>

        {/* Second Section */}
        <div className="lg:basis-1/2 flex flex-col  gap-[25px] font-manrope">
            <div className="capitalize text-blue text-[28px] text-center md:text-start">
                <p className="inline">ONE TIME ONLY </p>
                <p className="inline text-black">special price for 6 extra Clarifion for only </p>
                <p className="inline">$14 each </p>
                <p className="inline text-black">($84.00 total!)</p>
            </div>
            <div className="hidden lg:hidden mb-[6px] sm:flex justify-center"><img src={image} alt="image" className="hidden sm:block lg:hidden h-[328px] w-[320px]"/></div>
            <div className="flex gap-[15px]">
                <img src={imagePreview} alt="" className="bg-blue rounded-[10px] h-[80px] w-[80px] sm:h-[140px] sm:w-[270px]"/>
                <div className="flex flex-col gap-[10px] w-full sm:w-auto">
                    <div className="flex justify-between">
                        <div className="capitalize text-[14px] sm:text-[19px]">
                            <p>Clarifion Air Ionizer</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <p className="text-semiGray text-[10px] sm:text-[14px] font-semibold">$180</p>
                            <p className="text-blue text-[14px] sm:text-[22px] font-semibold">$84</p>
                        </div>
                    </div>
                    <div>
                        <img src={starts} alt="starts" className="w-[72px] sm:w-[95px]"/>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div>
                            <img src={dot} alt="dot" className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]"/>
                        </div>
                        <div>
                            <p className="text-[12px] sm:text-[13px] text-darkBlue font-light">12 left in Stock</p>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-gray text-[14px]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                    </div>
                </div>
            </div>
            <div className="sm:hidden text-center">
                <p className="text-gray text-[14px]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
            <div  className="flex flex-col gap-[10px] text-[12px] sm:text-[16px]">
                <div className="flex items-center gap-[10px]">
                    <img src={tickCircle} alt="tick" className="h-[16px] w-[16px] sm:h-[22px] sm:w-[22px]"/>
                    <p className="inline text-gray">Negative Ion Technology may<span className="inline font-bold"> help with allergens</span></p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={tickCircle} alt="tick" className="h-[16px] w-[16px] sm:h-[22px] sm:w-[22px]"/>
                    <p className="inline text-gray">Designed for<span className="inline font-bold"> air rejuvenation</span></p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={tickCircle} alt="tick" className="h-[16px] w-[16px] sm:h-[22px] sm:w-[22px]"/>
                    <p className="inline text-gray">Perfect for every room<span className="inline font-bold"> in all types of places.</span></p>
                </div>
            </div>
            <div className="py-[12px] px-[16px] text-[14px] sm:text-[16px] w-auto bg-lightBlue rounded-[10px] flex items-center gap-[14px]">
                <div>
                    <img src={percent} alt="percent" />
                </div>
                <div>
                    <p className="inline">Save<span className="text-blue inline"> 53% </span>and get<span className="text-blue inline"> 6 extra Clarifision </span>for only<span className="text-blue inline"> $14 Each</span>.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[12px]">
                <div>
                    <button className="uppercase px-[54] sm:px-[64px] py-[16px] bg-green text-white text-[14px] sm:text-[20px] flex gap-[10px] sm:gap-[19px] w-full rounded-[50px] font-bold justify-center">
                        <span>Yes - Claim my discount</span>
                        <img src={arrow} alt="arrow" className="w-[12px] sm:w-[16px]"/>
                    </button>
                </div>
                <div className="border border-lightGray rounded-[4px] capitalize text-[11px] xl:text-[14px] flex items-center justify-center flex-col xl:flex-row w-full px-[4px] py-[8px]"> 
                    <div className="flex items-center">
                        <div className="ml-[5px] text-gray">
                            <p>Free shipping</p>
                        </div>
                        <div className="text-lightGray mx-[9.5px] inline">
                            <img src={line} alt="line" />
                        </div>
                        <div className="flex items-center gap-[10px] text-gray">
                            <img src={padlock} alt="padlock" />
                            <p className="inline">Secure 256-bit SSL encryption.</p>
                        </div>
                        <div className="text-lightGray mx-[9.5px] hidden xl:block">
                            <img src={line} alt="line" />
                        </div>
                    </div>
                    <div className="xl:hidden py-[14px]">
                        <img src={middleLine} alt="middle-line" />
                    </div>
                    <div>
                        <div className="flex">
                            <img src={visa} alt="visa" />
                            <img src={shopPay} alt="shop-pay" />
                            <img src={paypal} alt="paypal" />
                            <img src={mastercard} alt="mastercard" />
                            <img src={gpay} alt="gpay" />
                            <img src={applePay} alt="apple-pay" />
                            <img src={amex} alt="amex" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[32px] mt-[8px]">
                    <div className="uppercase text-[12px] sm:text-[16px] font-medium underline underline-offset-2 text-red text-center">
                        <p>No thanks, I don’t want this.</p>
                    </div>
                <div className="flex text-gray gap-[16px] text-[12px] sm:text-[16px]">
                    <img src={satisfaction} alt="satisfaction" className="h-[48px] w-[48px] sm:h-[88px] sm:w-[88px]" />
                    <p>If you are not completely thrilled with your Clarifion - We have a <span className="inline font-bold">30 day satisfaction guarantee. </span>Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}