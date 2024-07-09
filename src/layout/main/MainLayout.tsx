import Header from "../header";

type Props = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="flex flex-col items-center w-full h-screen bg-custom-primary-f">
      <Header />

      <div className="flex flex-col px-2 max-w-7xl w-full">
        {children}
      </div>
    </main>
  );
};
