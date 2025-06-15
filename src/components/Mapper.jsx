import { useEffect, useState } from "react";
import { MdContentCopy, MdDone } from "react-icons/md";
import reactToJsx from "react-to-jsx";
import data from "../components/Styles";

const Mapper = ({ title, comp }) => {
  const [previewIndex, setPreviewIndex] = useState(null);
  const [copy, setCopy] = useState("");

  useEffect(() => {
    let timeout;

    if (copy) {
      timeout = setTimeout(() => {
        setCopy("");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [copy]);

  useEffect(() => {
    const restrictScroll = () => {
      if (previewIndex !== null) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };

    restrictScroll();

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [previewIndex]);

  return (
    <div className="w-full space-y-5">
      <h1 className="font-bold text-xl">{title}</h1>

      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-evenly items-center">
        {comp.map((item, index) => (
          <div
            key={index}
            className="w-5/6 h-60 lg:w-3/12 lg:h-72 flex flex-col my-2 lg:m-3 cursor-pointer border rounded-2xl"
            onClick={() => setPreviewIndex(index)}
          >
            {item.html}
            <h3 className="p-3 text-center font-bold">{item.title}</h3>
          </div>
        ))}
      </div>

      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-5 bg-[#ffffff7f]"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative w-10/12 h-1/6 lg:w-5/12 lg:h-4/6 bg-white rounded-xl overflow-hidden shadow-lg border"
            onClick={(e) => e.stopPropagation()}
          >
            {comp[previewIndex].html}
          </div>
          <div
            className="bg-white w-10/12 lg:w-4/12 h-4/6 border-2 rounded-2xl p-5 lg:p-10 overflow-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-center text-xl">
              {title} - {comp[previewIndex].title}
            </h1>
            <h3>No Installation Needed.</h3>
            {["html", "css", "addons"].map((item, index) => (
              <div className="space-y-2" key={index}>
                <h1>
                  {item !== "addons" ? item.toUpperCase() : "Container CSS"}:
                </h1>
                <div className="relative">
                  <pre className="border p-5 text-sm rounded-xl overflow-auto">
                    {reactToJsx(
                      item !== "addons" ? comp[previewIndex][item] : data.Addons
                    )}
                  </pre>
                  <div
                    className="absolute border p-1 rounded top-3 right-2 cursor-pointer bg-gray-200"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        reactToJsx(
                          item !== "addons"
                            ? comp[previewIndex][item]
                            : data.Addons
                        )
                      );
                      setCopy(item);
                    }}
                  >
                    {copy === item ? <MdDone /> : <MdContentCopy size={20} />}
                    {copy === item && (
                      <p className="absolute top-0 right-10 bg-gray-200 p-1 border text-xs rounded-md">
                        Copied
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapper;
