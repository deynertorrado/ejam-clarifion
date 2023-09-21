import clarifion from '../assets/Header-assets/clarifion.png';
import mcafee from '../assets/Header-assets/mcafee.svg';
import norton from '../assets/Header-assets/norton.svg';

export const Header = () => {
  return (
    <div className="bg-white flex mb-[35px] py-[20px] md:mb-[0px] md:py-[40px] lg:py-[50px] px-[5%] md:px-[10%] lg:px-[15%] items-center justify-between shadow-custom sm:shadow-white">
        <div>
            <img src={clarifion} alt="logo" className="w-[107px] h-[20px] sm:w-[192px] sm:h-[36px]"/>
        </div>
        <div className="flex gap-[16px] sm:gap-[32px]">
            <img src={mcafee} alt="logo" className="w-[44px] h-[16px] sm:w-[88px] sm:h-[32px]"/>
            <img src={norton} alt="logo" className="w-[41px] h-[16px] sm:w-[88px] sm:h-[32px]"/>
        </div>
    </div>
  )
}
