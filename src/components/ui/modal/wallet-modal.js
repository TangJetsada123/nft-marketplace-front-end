import metamask from '../../../assets/images/metamask.png'


export const WalletModal = ({ setShowLogin, setChoice }) => {
    const handleOKClick = () => {
        setChoice(true)
        setShowLogin(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setShowLogin(false)
    }


    return (
        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
            <div className="flex h-screen justify-center items-center ">
                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-black rounded-xl ">
                    <div className="flex  text-lg  text-zinc-600 mb-10 ml-5" >You are Signing</div>
                    <img src={metamask} className="w-44"/>
                    <div className="flex ml-2 mt-2">
                        <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">cancel</button>
                        <button onClick={handleOKClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Sign</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
