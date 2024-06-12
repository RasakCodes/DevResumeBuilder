export const Paragraph = ({ text, className }) => {
  return (
    <p className={`text-gray-600 mb-8 text-lg  text-center ${className}`}>
      {text}
    </p>
  );
};
