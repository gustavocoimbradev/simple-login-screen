export function Footer() {
    return (
        <div className="bg-white pt-10 pb-20 xl:py-10 w-full">
            <div className="flex flex-col xl:flex-row items-center max-w-[1118px] mx-auto gap-10 xl:gap-24">
                <a href="#" className="p-2 py-4 bg-accent text-white flex-1 text-center underline text-sm transition-all ease-in-out duration-300 hover:bg-accent/90"> 
                Create new account
                </a>
                <div className="w-[80%] h-[1px] xl:h-[150px] xl:w-[1px] bg-accent">
                </div>
                <div className="flex flex-col xl:flex-row items-center gap-4 flex-1">
                <div className="text-nowrap">Or login with:</div>
                <div className="flex gap-8">
                    <a href="" className="w-[60px] h-[60px] rounded-full border-accent border-[1px]"></a>
                    <a href="" className="w-[60px] h-[60px] rounded-full border-accent border-[1px]"></a>
                    <a href="" className="w-[60px] h-[60px] rounded-full border-accent border-[1px]"></a>
                    <a href="" className="w-[60px] h-[60px] rounded-full border-accent border-[1px]"></a>
                </div>
                </div>
            </div>
        </div>
    )
}