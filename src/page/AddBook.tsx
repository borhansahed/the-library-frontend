import FormButton from "../component/form/FormButton";
import FormInput from "../component/form/FormInput";

const AddBook = () => {
  return (
    <>
      <h1 className=" mt-20 text-center font-bold text-3xl text-blue-700">
        Add Book
      </h1>
      <section className=" my-14 flex justify-center items-center">
        <form className="w-[500px]  h-auto border border-blue-700 rounded-lg flex flex-col p-4 pb-10">
          <FormInput type={"text"} labelText={"Title"} placeholder={"title"} />
          <FormInput
            type={"text"}
            labelText={"Author"}
            placeholder={"author"}
          />

          <FormInput type={"text"} labelText={"Genre"} placeholder={"genre"} />
          <FormInput
            type={"text"}
            labelText={"Year"}
            placeholder={"publication year"}
          />

          <input
            className=" mt-5 mb-2 ml-32 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-3
      file:rounded-full file:border-0
      file:text-xs file:font-bold
      file:bg-blue-700 file:text-white
      hover:file:bg-violet-100"
            id="file-upload"
            type="file"
          />
          <FormButton />
        </form>
      </section>
    </>
  );
};

export default AddBook;
