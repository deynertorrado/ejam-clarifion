import leftArrrow from '../assets/TopHeader-assets/left-arrow.svg';
import rightArrrow from '../assets/TopHeader-assets/right-arrow.svg';
import checked from '../assets/TopHeader-assets/checked.svg';
import check from '../assets/TopHeader-assets/check.svg';
import heart from '../assets/TopHeader-assets/heart.svg';
import truck from '../assets/TopHeader-assets/truck.svg';

export const TopHeader = () => {
  return (
    <div className="bg-middleBlue w-full h-[50px] font-manrope text-xs flex justify-evenly items-center uppercase">
        <div className="md:hidden"><img src={leftArrrow} alt="arrow"/></div> {/* Arrow */}
        <div className="inline-block">
          <div className="flex items-center">
            <img src={checked} alt="checked" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">30-DAY SATISFACTION GUARANTEE</p>
          </div>
        </div>
        <div className="hidden sm:inline-block">
          <div className="flex items-center">
            <img src={truck} alt="truck" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">Free delivery on orders over $40.00</p>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="flex items-center">
            <img src={heart} alt="heart" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">50.000+ HAPPY CUSTOMERS</p>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="flex items-center">
            <img src={check} alt="check" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">100% Money Back Guarantee</p>
          </div>
        </div>
        <div className="md:hidden"><img src={rightArrrow} alt="arrow"/></div> {/* Arrow */}
    </div>
  )
}
