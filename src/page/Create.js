import React from "react";
import { IoMdImage } from "react-icons/io";

export const Create = () => {
  return (
    <div className="flex justify-center">
      <div className="my-24">
        <h2 className="text-3xl font-bold">Create New Item</h2>
        <div className="mt-8">
          <div className="flex flex-col">
            <p>Image, Video, Audio, or 3D Model</p>
            <div className="flex justify-center items-center w-[350px] h-[257px] bg-white border-dotted border-2 border-gray-200 rounded-2xl mb-4">
              <IoMdImage size={84} className="text-gray-100 " />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-bold">Name</span>
            <input
              type="text"
              className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2"
              placeholder="Item name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-bold">External link</span>
            <p className="text-sm text-gray-400 max-w-md">
              20Scoops will include a link to this URL on this item's detail
              page, so that users can click to learn more about it. You are
              welcome to link to your own webpage with more details.
            </p>
            <input
              type="text"
              className="px-2 w-[500px] border-[1px] border-gray-100 rounded-md py-2"
              placeholder="www.eiei.com"
            />
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
            />
          </div>
          <div>
            <button className="bg-[#DE4343] text-white w-24 py-3 rounded-xl">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
