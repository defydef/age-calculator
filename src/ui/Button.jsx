function Button({ children, onClick }) {
  return (
    <button
      className="bg-[var(--purple)] hover:bg-[var(--black)] rounded-full w-16 h-16 sm:w-24 sm:h-24 flex justify-center items-center z-10 duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
