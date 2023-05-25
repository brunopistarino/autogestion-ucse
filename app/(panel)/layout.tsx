import Sidebar from "@components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white text-black">
      <Sidebar />
      <main className="w-full overflow-auto">
        <div className="flex flex-col gap-8 pt-8 pb-12 mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
