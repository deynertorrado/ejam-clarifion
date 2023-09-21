import check from '../assets/PurchaseStatus-assets/check.svg';
import offer from '../assets/PurchaseStatus-assets/offer.svg';
import unfilled from '../assets/PurchaseStatus-assets/unfilled.svg';

export const PurchaseStatus = () => {
    return (
      <div className="font-manrope capitalize flex items-center justify-between text-[12px] sm:text-xl pt-[16px] sm:pt-6 md:pt-12 lg:py-12 px-4 md:px-10 lg:px-5 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src={check} alt="check" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><span className="hidden lg:inline">Step 1: </span>Cart Review</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src={check} alt="check" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><span className="hidden lg:inline">Step 2: </span>Checkout</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src={offer} alt="offer" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p className="font-bold"><span className="hidden lg:inline">Step 3: </span>Special Offer</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src={unfilled} alt="unfilled" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><span className="hidden lg:inline">Step 4: </span>Confirmation</p>
        </div>
      </div>
    )
}