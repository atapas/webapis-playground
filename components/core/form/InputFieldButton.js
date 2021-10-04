/**
 *
 * @description styled button that can be used as an addon button with an input field
 * @prop onClick - A function that is going to be called when the button is clicked.
 * @prop children - We are treating the children as the button text here.
 *
 * NOTE: Please make sure that the className passed as prop with override the complete styling for now.
 */

const InputFieldButton = ({ onClick, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="tw-rounded-tl-none tw-rounded-bl-none tw-border-solid tw-border-t-1 tw-border-r-1 tw-border-b-1 tw-border-l-none tw-border-gray-300 tw-text-18px"
      {...rest}
    >
      {children}
    </button>
  );
};

export default InputFieldButton;
