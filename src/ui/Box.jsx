function Box({ children }) {
  return (
    <div className="flex flex-col sm:w-[52.5rem] w-[21.4375rem] h-[80vh] sm:h-fit items-center sm:p-[56px] bg-white rounded-[1.5rem_1.5rem_6.25rem_1.5rem] sm:rounded-[1.5rem_1.5rem_12.5rem_1.5rem] p-[3rem_1.5rem] gap-5">
      {children}
    </div>
  );
}

export default Box;
