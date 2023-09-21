export const TopHeader = () => {
  return (
    <div className="bg-middleBlue w-full h-[50px] font-manrope text-xs flex justify-evenly items-center uppercase">
        <div className="md:hidden"><img src="\src\assets\TopHeader-assets\left-arrow.svg" alt="arrow"/></div> {/* Arrow */}
        <div className="inline-block">
          <div className="flex items-center">
            <img src="\src\assets\TopHeader-assets\checked.svg" alt="checked" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">30-DAY SATISFACTION GUARANTEE</p>
          </div>
        </div>
        <div className="hidden sm:inline-block">
          <div className="flex items-center">
            <img src="\src\assets\TopHeader-assets\truck.svg" alt="truck" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">Free delivery on orders over $40.00</p>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="flex items-center">
            <img src="\src\assets\TopHeader-assets\heart.svg" alt="heart" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">50.000+ HAPPY CUSTOMERS</p>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <div className="flex items-center">
            <img src="\src\assets\TopHeader-assets\check.svg" alt="check" className="w-[22px] h-[22px] mr-[8px]"/>
            <p className="text-white">100% Money Back Guarantee</p>
          </div>
        </div>
        <div className="md:hidden"><img src="\src\assets\TopHeader-assets\right-arrow.svg" alt="arrow"/></div> {/* Arrow */}
    </div>
  )
}
