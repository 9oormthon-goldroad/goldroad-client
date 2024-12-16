function ButtonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-[54px] desktop:w-[432px] w-[calc(100%-48px)] left-[50%] translate-x-[-50%]">
      {children}
    </div>
  );
}

export default ButtonLayout;
