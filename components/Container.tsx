import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  console.log(className);
  return (
    <section className="px-4 md:px-8">
      <div
        className={cn(
          "flex flex-col p-6 rounded-md border gap-2 bg-white",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
