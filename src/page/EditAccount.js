const Edit = () => {
    return (
    <div className="flex-box mt-32 mr-16 ml-16 ">
        <div className="font-bold text-4xl mb-3">Profile details</div>
        <div className="flex-box">
            <label>Username</label>
            <input placeholder="Enter Username" className="block text-xs font-bold px-5 shadow-lg leading-normal p-4 pl-10 w-full  text-gray-900  rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500  dark:text-gray dark:focus:ring-gray-500 dark:focus:border-gray-500"></input>
        </div>
        <div className="flex-box">
            <label>Bio</label>
            <textarea
                rows={4}
                className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2"
                placeholder="Tell the world your story!"
            />
        </div>
    </div>)
}

export default Edit;