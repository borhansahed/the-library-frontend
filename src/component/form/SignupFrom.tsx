import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
import FormButton from "./FormButton";
import { useState } from "react";
import { useSignupMutation } from "../../redux/api/auth.api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignupFrom() {
  const [inputData, setInputData] = useState<{
    [key in string]: string | File;
  }>({});
  const navigate = useNavigate();
  const [signup] = useSignupMutation();
  const handleInputData = (key: string, value: string | File) => {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await signup(inputData);
      if (result?.data?.data) {
        toast.success("successfully Signup");
        navigate("/login");
      } else {
        toast.error("Give valid data");
      }
    } catch (error) {
      console.log("eorr", error);
    }
  };
  return (
    <>
      <section className=" mt-40 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px]  h-auto border border-blue-700 rounded-lg flex flex-col p-4 pb-10"
        >
          <h3 className="text-center text-2xl text-blue-700 mb-6 font-bold">
            Signup
          </h3>

          <FormInput
            type={"text"}
            labelText={"Name"}
            placeholder={"Your name"}
            value={inputData.name ? inputData.name : ""}
            handleInputData={handleInputData}
          />
          <FormInput
            type={"email"}
            labelText={"Email"}
            placeholder={"Email"}
            value={inputData.email ? inputData.email : ""}
            handleInputData={handleInputData}
          />
          <FormInput
            type={"password"}
            labelText={"Password"}
            placeholder={"Password"}
            value={inputData.password ? inputData.password : ""}
            handleInputData={handleInputData}
          />
          <FormButton />
          <FormFooter title={"Create an account?"} isLogin={false} />
        </form>
      </section>
    </>
  );
}
