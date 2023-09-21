export const Footer = () => {
  return (
    <div className="bg-middleBlue font-manrope px-[10px] lg:px-[127px] py-[25px] lg:py-[20px] mt-[45px] text-[12px] lg:text-[16px] flex flex-col lg:flex-row items-center justify-center gap-[18px] lg:gap-[0px]">
        <div className="text-white flex w-full justify-center items-center">
            <p className="capitalize">Copyright (c) 2023</p>
            <img src="src\assets\MainContent-assets\line.svg" alt="line" className="mx-[13px]"/>
            <p className="lowercase">Clarifionsupport@clarifion.com</p>
        </div>
        <div className="text-white flex w-full gap-[12px] justify-center items-centerr">
            <img src="src\assets\Footer-assets\padlock.svg" alt="padlock"/>
            <p className="inline capitalize">Secure 256-bit SSL encryption.</p>
        </div>
    </div>
  )
}
