import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter";
import { useState } from "react";
import { useLoginMutation } from "../../redux/api/auth.api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginFrom = () => {
  const [inputData, setInputData] = useState<{
    [key in string]: string | File;
  }>({});
  const navigate = useNavigate();

  const [login] = useLoginMutation();
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
      const result: any = await login(inputData);
      if (result?.data?.data) {
        localStorage.setItem("user", JSON.stringify(result?.data?.data));
        toast.success("successfully Login");
        navigate("/");
      } else {
        toast.error("Not Found");
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
          <h3 className="text-center font-bold text-2xl text-blue-700 mb-10">
            Login
          </h3>

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
          <FormFooter title={" Already have an account?"} isLogin={true} />
        </form>
      </section>
    </>
  );
};

export default LoginFrom;
