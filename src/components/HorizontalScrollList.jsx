import React from "react";
import imageUrl from "../services/imageUrl";

export default function HorizontalScrollList({ lists }) {
  return (
    <div className="bg-gray-100 h-[15rem] my-3 whitespace-nowrap overflow-x-auto scrollbar-hide">
      {lists &&
        lists.map((item, idx) => (
          <div
            className=" w-[9rem] bg-blue-600 h-[80%] m-[10px] inline-block rounded-md"
            key={idx}
          >
            <img
              src={imageUrl(item.poster_path)}
              alt="image"
              height="14rem"
              width="100%"
              className="rounded-lg "
            />
          </div>
        ))}
    </div>
  );
}
