function MainContainer({ children }) {
  return (
    <main className="flex bg-[var(--light-grey)] items-center justify-center h-screen w-screen">
      {children}
    </main>
  );
}

export default MainContainer;
