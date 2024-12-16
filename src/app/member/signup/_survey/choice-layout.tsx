interface ChoiceLayoutProps {
  title: string;
  children: React.ReactNode;
  subTitle?: string;
}

function ChoiceLayout({ title, subTitle, children }: ChoiceLayoutProps) {
  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col justify-center items-start gap-1 font-bold text-[24px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1>{title}</h1>
          {subTitle && <p>{subTitle}</p>}
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4">{children}</div>
    </section>
  );
}

export default ChoiceLayout;
