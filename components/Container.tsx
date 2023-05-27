export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 md:px-8">
      <div className="flex flex-col p-6 rounded-md border gap-2 bg-white">
        {children}
      </div>
    </section>
  );
}
