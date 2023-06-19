type ColorButtonProps = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: ColorButtonProps) {
  const sizes = {
    small: {
      divStyle: "p-[0.15rem]",
      buttonStyle: "p-[0.3rem] text-base",
    },
    big: {
      divStyle: "p-[0.3rem]",
      buttonStyle: "p-4 text-2xl",
    },
  };
  const { divStyle, buttonStyle } = sizes[size];

  return (
    <div className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${divStyle}`}>
      <button
        className={`bg-white rounded-sm text-base hover:opacity-90 transition-opacity ${buttonStyle}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
