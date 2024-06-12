import { useInView } from "react-intersection-observer";

const Lazy = ({ minHeight, gridArea, placeholder, children }) => {
  // Setup ref and in-view options
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once like unobserveOnEnter
  });

  return (
    <div
      ref={ref}
      style={{ gridArea: gridArea, minHeight: minHeight }}
      className={inView ? "lazyContainer" : ""}
    >
      {inView ? children : placeholder}
    </div>
  );
};

export default Lazy;
