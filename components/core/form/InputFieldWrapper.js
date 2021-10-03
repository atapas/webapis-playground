/**
 *
 * @description A wrapper that provides some border styles to the input field having no borders
 *
 * NOTE: Please make sure that the className passed as prop with override the complete styling for now.
 */
const InputFieldWrapper = ({ children }) => {
  return (
    <div className="tw-flex tw-border-solid tw-border-1 tw-border-gray-300 tw-rounded-4px tw-mb-5">
      {children}
    </div>
  );
};

export default InputFieldWrapper;
