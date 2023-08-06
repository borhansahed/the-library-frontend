import FormInput from "./formInput";
import FormFooter from "./FormFooter";
import FormButton from "./FormButton";

export default function SignupFrom() {
  return (
    <>
      <section className=" mt-40 flex justify-center items-center">
        <form className="w-[500px]  h-auto border border-blue-700 rounded-lg flex flex-col p-4 pb-10">
          <h3 className="text-center text-2xl text-blue-700 mb-6 font-bold">
            Signup
          </h3>

          <FormInput
            type={"text"}
            labelText={"Name"}
            placeholder={"Your name"}
          />
          <FormInput type={"email"} labelText={"Email"} placeholder={"Email"} />
          <FormInput
            type={"password"}
            labelText={"Password"}
            placeholder={"Password"}
          />
          <FormButton />
          <FormFooter title={"Create an account?"} isLogin={false} />
        </form>
      </section>
    </>
  );
}
