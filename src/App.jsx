import Mapper from "./components/Mapper";
import data from "./components/Styles";

const App = () => {
  return (
    <div className="flex flex-col justify-evenly items-center space-y-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center p-10">
        Simple Background Designs
      </h1>
      <Mapper title="Visual Texture / Grain / Noise" comp={data.Texture} />
      <Mapper title="Gradient-Based Styles" comp={data.Gradient} />
      <Mapper title="Glass / Frosted UI Effects" comp={data.Glass} />
      <Mapper title="Dynamic & Abstract" comp={data.Dynamic} />
      <Mapper title="Patterns & Grids" comp={data.Patterns} />
      <h1 className="fixed top-0 right-0 lg:top-10 lg:right-10 lg:text-xl bg-gray-300/80 p-2 px-5 lg:p-5 rounded-lg z-10 lg:rounded-2xl">
        Made by{" "}
        <a
          href="https://github.com/PraveenTech005"
          className="text-[#0000ff] cursor-pointer hover:border-b-4"
        >
          Praveen
        </a>
      </h1>
    </div>
  );
};

export default App;
