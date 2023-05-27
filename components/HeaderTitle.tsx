export default function HeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="px-4 md:px-0 text-3xl font-semibold">{children}</p>;
}
