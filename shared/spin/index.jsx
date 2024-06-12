import "./spin.css";
const Spin = ({ className }) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`spinner ${className}`}></div>
    </div>
  );
};

export default Spin;
