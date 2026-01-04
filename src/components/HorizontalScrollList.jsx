import imageUrl from "../services/imageUrl";

export default function HorizontalScrollList({ lists }) {

  return (
    <div className="bg-gray-100 my-3 flex overflow-x-auto gap-4 p-3">
      {lists &&
        lists.map((item, idx) => (
          <div
            className="min-w-40 rounded-md text-center"
            key={idx}
          >
            <img
              src={imageUrl(item.poster_path)}
              alt="image"
              className="rounded-lg w-full shadow-md"
            />
            <div className="pt-2.5">
            <p className="mb-0" >{item.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
