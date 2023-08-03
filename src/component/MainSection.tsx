const MainSection = () => {
  return (
    <>
      <main className="mt-40 w-2/5 mx-auto mb-36">
        <h1 className="text-6xl text-slate-700 text-center font-bold">
          <span>Learning Books is</span> <br />
        </h1>
        <p className="text-7xl text-blue-700 font-bold text-center">
          Great Habit.
        </p>
        <p className="text-center mt-1 text-gray-400 text-sm">
          Learn and increase your knowledge!
        </p>
        <div className="mt-8 flex justify-evenly items-center px-14">
          <button className="border border-blue-700 text-sm font-bold text-blue-700 py-2 px-5 rounded-full ">
            All Books
          </button>
          <button className="border hover:bg-white hover:border-blue-700 hover:text-blue-700 bg-blue-700 border-white text-sm font-bold text-white py-2 px-5 rounded-full ">
            <a href="#books"> Latest Books</a>
          </button>
        </div>
      </main>
    </>
  );
};

export default MainSection;
