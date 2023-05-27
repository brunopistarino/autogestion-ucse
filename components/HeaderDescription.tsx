export default function HeaderDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 md:px-0">{children}</div>;
}
