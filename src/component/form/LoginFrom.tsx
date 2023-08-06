import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter";

const LoginFrom = () => {
  return (
    <>
      <section className=" mt-40 flex justify-center items-center">
        <form className="w-[500px]  h-auto border border-blue-700 rounded-lg flex flex-col p-4 pb-10">
          <h3 className="text-center font-bold text-2xl text-blue-700 mb-10">
            Login
          </h3>

          <FormInput type={"email"} labelText={"Name"} placeholder={"Email"} />
          <FormInput
            type={"password"}
            labelText={"Password"}
            placeholder={"Password"}
          />
          <FormButton />
          <FormFooter title={" Already have an account?"} isLogin={true} />
        </form>
      </section>
    </>
  );
};

export default LoginFrom;
