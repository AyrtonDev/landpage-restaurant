type Props = {
  children: React.ReactNode;
}

export default function ContentMiddle({ children }: Props) {
  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col px-2 max-w-7xl w-full">
        {children}
      </div>
    </main>
  );
};
