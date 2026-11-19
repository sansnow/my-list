import Navbar from "@/Components/ui/Navbar";
import Sidebar from "@/Components/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-full">
        <Navbar />
        <div className="w-full p-2">{children}</div>
      </div>

    </div>
  );
}
