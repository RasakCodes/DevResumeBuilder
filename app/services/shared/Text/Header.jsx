export const HeaderText = ({ text, className }) => {
  return (
    <h1
      className={`text-3xl text-center md:text-start font-semibold text-gray-900 lg:text-4xl lg:leading-[3.25rem] xl:text-5xl xl:leading-[3.75rem] ${className}`}
    >
      {text}
    </h1>
  );
};
