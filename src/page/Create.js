import React, { useState } from "react";
import axios from 'axios'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [category_id, setCategoryId] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")

  const handleFleChange = (e) => {
    console.log(e.target.files[0])
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }
  console.log(file)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    let user = JSON.parse(localStorage.getItem('Token'|| 'token'))
    const token = `Bearer ${JSON.parse(localStorage.getItem('Token'|| 'token'))}`
    const userArr = jwtDecode(user)
    axios.post("https://nft-marketplace-service-production.up.railway.app/api/asset/upload", {
      name: name,
      description: description,
      blockchain: 'eth',
      file: file,
      category_id: category_id,
      collection_id: '6391a025aadcfccad6a15895',
      user_id: userArr.sub,
      status: 'Owned',
      status_ban: false
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    }
    )
      .then((res) => {
        navigate('/account', { replace: true })
      })
  }

  return (
    <div className="flex justify-center">
      <div className="my-24">
        <h2 className="text-3xl font-bold">Create New Item</h2>
        <div className="mt-8">
          <div className="flex flex-col mb-4">
            <p>Image, Video, Audio, or 3D Model</p>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-200 dark:hover:bg-gray-300">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input type="file" name='image' accept="image/png, image/jpeg" onChange={
                  handleFleChange
                } />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold">Name</span>
          <input
            type="text"
            className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2"
            placeholder="Item name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold">Category</span>
          <select className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2 text-gray-400"
            value={category_id}
            onChange={e => setCategoryId(e.target.value)}
          >
            <option >Select Category</option>
            <option value="63885498724e607fccd3c3fe">Art</option >
            <option value="638854a1724e607fccd3c404">Music</option>
            <option value="638854ad724e607fccd3c40a">Photography</option>
            <option value="638854b4724e607fccd3c410">Sport</option>
            <option value="639abd713e03ff2be5a50461">Collectibles</option>
            <option value="639abd803e03ff2be5a50463">Domain Names</option>
            <option value="639abd963e03ff2be5a50467">Trading Cards</option>
            <option value="639abd9f3e03ff2be5a50469">Utility</option>
            <option value="639abdad3e03ff2be5a5046b">Virtual Worlds</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold">Description</span>
          <p className="text-sm text-gray-400 max-w-md">
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
          <textarea
            rows={4}
            className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2"
            placeholder="Provide a detailed description of your Item."
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-[#DE4343] text-white w-24 py-3 rounded-xl" onClick={() => handleSubmit()}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
