export const YellowBgText = ({ text, className }) => {
  return (
    <div
      className={`inline-flex px-4 py-2 justify-center items-center space-x-2.5 rounded-full ${className}`}
    >
      <p className={` text-center font-normal text-lg leading-6 `}>{text}</p>
    </div>
  );
};
