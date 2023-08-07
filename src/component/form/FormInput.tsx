interface IProps {
  type: string;
  labelText: string;
  value: string | undefined | File;
  placeholder: string;
  handleInputData: (key: string, value: string) => void;
}

const FormInput = ({
  type,
  labelText,
  value,
  placeholder,
  handleInputData,
}: IProps) => {
  return (
    <>
      <label
        className=" ml-32 mt-3 font-bold  text-[14px] text-slate-600"
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        className="border py-1   text-sm placeholder:text-sm focus:outline-blue-700 mt-1 border-slate-400 w-52 mx-auto px-3 rounded-md"
        type={type}
        name={labelText}
        value={value as string}
        id={labelText}
        placeholder={placeholder}
        onChange={(e: { target: { value: string } }) =>
          handleInputData(labelText.toLowerCase(), e.target.value)
        }
      />
    </>
  );
};

export default FormInput;
