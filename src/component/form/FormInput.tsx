interface IProps {
  type: string;
  labelText: string;
  placeholder: string;
}

const FormInput = ({ type, labelText, placeholder }: IProps) => {
  return (
    <>
      <label
        className=" ml-32 mt-3 text-[14px] text-slate-600"
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        className="border placeholder:text-sm focus:outline-blue-700 mt-1 border-slate-400 w-52 mx-auto px-3 rounded-md"
        type={type}
        name={labelText}
        id={labelText}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
