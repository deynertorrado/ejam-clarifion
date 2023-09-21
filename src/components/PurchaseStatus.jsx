export const PurchaseStatus = () => {
    return (
      <div className="font-manrope capitalize flex items-center justify-between text-[12px] sm:text-xl pb-[5px] pt-[16px] sm:py-6 md:py-12 px-4 md:px-10 lg:px-5 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src="src\assets\PurchaseStatus-assets\check.svg" alt="check" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><p className="hidden lg:inline">Step 1: </p>Cart Review</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src="src\assets\PurchaseStatus-assets\check.svg" alt="check" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><p className="hidden lg:inline">Step 2: </p>Checkout</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src="src\assets\PurchaseStatus-assets\offer.svg" alt="offer" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p className="font-bold"><p className="hidden lg:inline">Step 3: </p>Special Offer</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[8px] sm:gap-[20px]">
          <img src="src\assets\PurchaseStatus-assets\unfilled.svg" alt="unfilled" className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]"/>
          <p><p className="hidden lg:inline">Step 4: </p>Confirmation</p>
        </div>
      </div>
    )
}