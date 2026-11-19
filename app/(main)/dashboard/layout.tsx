import Sidebar from "@/Components/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full p-2">{children}</div>
    </div>
  );
}
