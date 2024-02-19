import Footer from "./Footer";
export default function Chatbot() {
  return (
    <>
      <div className="flex flex-col items-center py-20 font-sans font-bold text-lg gap-4 ">
        <div className="flex flex-col w-3/5 gap-6">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col justify-start">
              <img src="\img\icons8-robot-100.png" alt="" className="h-8 w-8" />
            </div>

            <div className="border border-1 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl w-3/4 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              ratione eos ab ut nam, aspernatur quas praesentium adipisci
              provident quaerat hic vitae suscipit. Ipsum enim labore dolorem!
              Ea, praesentium porro!
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <div className="border border-1 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl w-3/4 p-4 text-right text-white bg-blue-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              at nihil placeat perferendis iure aperiam officia alias facere
              omnis, distinctio laborum unde tenetur sunt rem maiores ex error
              quis libero!
            </div>
            <div className="flex flex-col justify-end">
              <img src="\img\icons8-robot-100.png" alt="" className="h-8 w-8" />
            </div>
          </div>
        </div>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
        <div className="w-3/5 flex flex-row gap-2">
          <div className="w-full">
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 border-2 px-2 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center"></span>
          </div>
          <div className="bg-blue-500 rounded-md flex flex-row justify-center items-center w-20">
            <img src="\img\icons8-right-arrow-90 (1).png" alt="" className="h-8 w-8"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
