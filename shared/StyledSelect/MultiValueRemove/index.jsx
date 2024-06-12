import { components } from 'react-select';

export const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        className="ml-1"
      >
        <path
          d="M9 3.9375L3 9.9375M3 3.9375L9 9.9375"
          stroke="#98A2B3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </components.MultiValueRemove>
  );
};
