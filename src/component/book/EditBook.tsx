import { useNavigate, useParams } from "react-router-dom";
import FormButton from "../form/FormButton";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useState } from "react";
import FormInput from "../form/FormInput";
import BookGenre from "./BookGenre";
import { useUpdateBookMutation } from "../../redux/api/book.api";

const EditBook = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [inputData, setInputData] = useState<{
    [key in string]: string | File;
  }>({});

  const [image, setImage] = useState<string | undefined>(undefined);
  const [updateBook, { isError, isLoading, isSuccess }] =
    useUpdateBookMutation();

  const handleInputData = async (key: string, value: string | File) => {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [key]: value,
    }));
  };

  const handleImage = async (key: string, value: File) => {
    inputData[key] = value;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_API
    }`;
    const fromData = new FormData();
    fromData.append("image", inputData?.image);
    toast.promise(
      fetch(img_hosting_url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((data) => setImage(data.data.display_url)),
      {
        loading: "saving...",
        success: "successfully added",
        error: "failed",
      }
    );
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    inputData.image = image!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    updateBook({ id, inputData });
    // console.log(inputData);

    if (isError) {
      return toast.error("Put valid value");
    }
  };

  if (isSuccess) {
    setTimeout(() => {
      navigate(`/allBook/${id}`);
    }, 1000);
    toast.success("Successfully updated");
  }

  return (
    <>
      <h1 className=" mt-20 text-center font-bold text-3xl text-blue-700">
        Edit Book
      </h1>
      <section className=" my-14 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px]  h-auto border border-blue-700 rounded-lg flex flex-col p-4 pb-10"
        >
          <FormInput
            type={"text"}
            labelText={"Title"}
            value={inputData.title ? inputData.title : ""}
            placeholder={"title"}
            handleInputData={handleInputData}
          />
          <FormInput
            type={"text"}
            labelText={"Author"}
            value={inputData.author ? inputData.author : ""}
            placeholder={"author"}
            handleInputData={handleInputData}
          />

          <BookGenre
            handleInputData={handleInputData}
            genre={inputData?.genre}
          />

          <FormInput
            type={"number"}
            labelText={"Year"}
            value={inputData?.year ? inputData.year : ""}
            placeholder={"publication year"}
            handleInputData={handleInputData}
          />

          {image && (
            <>
              <div className="w-20 ml-32 mt-4 relative">
                <p
                  onClick={() => setImage(undefined)}
                  className="text-blue-700 absolute right-[-3px] top-[-6px] text-lg z-20"
                >
                  <MdOutlineCancel />
                </p>
                <img
                  className=""
                  src={image}
                  alt="bookPhoto"
                  width={100}
                  height={100}
                />
              </div>
            </>
          )}
          {!image && (
            <>
              <input
                className=" mt-5 mb-2 ml-32 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-3
      file:rounded-full file:border-0
      file:text-xs file:font-bold
      file:bg-blue-700 file:text-white
      hover:file:text-blue-700 hover:file:bg-slate-300"
                type="file"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => handleImage("image", e.target.files[0])}
              />
            </>
          )}
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <FormButton />
          )}
        </form>
      </section>
    </>
  );
};

export default EditBook;
