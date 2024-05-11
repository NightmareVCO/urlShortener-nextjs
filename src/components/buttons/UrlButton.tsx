import UrlFormIcon from "@icons/UrlFormIcon";

const UrlButton = ({ value, onChange }: any) => {
  return (
    <>
      <UrlFormIcon />
      <div className="flex justify-start w-11/12">
        <input
          className="w-full bg-main-gray caret-main-pink focus:outline-none"
          type="text"
          name="originalUrl"
          placeholder="Enter the link here"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default UrlButton;
