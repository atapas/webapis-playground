/**
 *
 * @description A generic input field. Designed at an initial scale.
 * @props all the props related to input field.
 *
 * NOTE: Please make sure that the className passed as prop with override the complete styling for now.
 */
const InputField = props => {
  return (
    <input
      {...props}
      className="tw-w-full tw-appearance-none tw-border-none leading-tight tw-py-3 tw-px-4 tw-rounded-tr-none tw-rounded-br-none tw-rounded-tl-4px tw-rounded-bl-4px tw-outline-none"
    />
  );
};

export default InputField;
