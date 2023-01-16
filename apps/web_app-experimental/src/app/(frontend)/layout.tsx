import Navbar from "@/components/Navbar";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
