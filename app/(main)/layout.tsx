import Sidebar from "@/components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 px-6 py-10">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
