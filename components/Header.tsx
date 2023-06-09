import Navigation from "@components/Navigation";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="md:px-8 flex flex-col gap-4">
      <Navigation />
      {children}
    </header>
  );
}
