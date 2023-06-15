interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        className="button is-primary w-full"
        style={{ width: "100%" }}
        onClick={ (e) => {
            e.preventDefault();
            props.onClick();
        }
        }
        disabled={props.isDisabled}
      >
        Submit
      </button>
    </>
  );
};
