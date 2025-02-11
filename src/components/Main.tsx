export function Main() {
    return (
        <div className="py-20 xl:py-0 bg-accent flex-1 w-full grid place-items-center">

            <div className="max-w-[80%] xl:max-w-[480px] mx-auto flex flex-col items-center justify-center">

                <div className="text-white text-xl">
                    Welcome to
                </div>

                <div className="mb-24">
                    <img src="/logo.png" />
                </div>

                <div className="flex items-center gap-2 text-white w-full mb-12">
                    <div className="flex-1 h-[1px] bg-white"></div>
                    <div>Please, login:</div>
                    <div className="flex-1 h-[1px] bg-white"></div>
                </div>

                <div className="flex flex-col xl:flex-row items-end gap-4 w-full">
                    <div className="flex flex-col w-[100%] xl:w-[204px]">
                        <label htmlFor="user" className="text-white mb-1">User</label>
                        <input type="text" className="bg-white p-2" />
                    </div>
                    <div className="flex flex-col w-[100%] xl:w-[204px]">
                        <label htmlFor="passphrase" className="text-white mb-1">Passphrase</label>
                        <input type="password" className="bg-white p-2" />
                    </div>
                    <div className="flex flex-col w-[100%] xl:w-[40px]">
                        <button className="bg-transparent border-white border-[1px] w-[100%] xl:w-[40px] h-[40px] xl:grid xl:place-items-center text-white flex items-center justify-center gap-2">
                            <span className=" xl:hidden">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/></svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full mt-4 xl:mt-2">
                    <div className="flex gap-2">
                        <input type="checkbox"/>
                        <span className="text-white text-[10px] underline">I agree with the end user license agreemen</span>
                    </div>
                    <div className="flex flex-col flex-1 text-end">
                        <a href="#" className="text-white text-[10px] underline">I need help &gt;</a>
                    </div>
                </div>
                
            </div>
       

        </div>
    )
}