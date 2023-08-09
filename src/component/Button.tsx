const Button = ({ buttonText }: { buttonText: string }) => {
  return (
    <>
      <button className="border hover:bg-white hover:border-blue-700 hover:text-blue-700 bg-blue-700 border-white text-sm font-bold text-white py-2 px-5 rounded-full ">
        <a href="#books"> {buttonText}</a>
      </button>
    </>
  );
};

export default Button;
