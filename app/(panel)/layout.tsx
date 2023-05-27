import Sidebar from "@components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex md:h-screen md:h-[100dvh] bg-white text-black">
      <Sidebar />
      <main className="w-full overflow-auto bg-[#F9FAFB]">
        <div className="flex flex-col gap-8 pt-8 pb-12 mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
