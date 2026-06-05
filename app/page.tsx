import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 px-6 py-10">
        <h2 className="text-2xl font-bold text-foreground">Welcome to Cap Cruncher</h2>
        <p className="text-muted-foreground mt-2">Select a section from the left to get started.</p>
      </div>
    </div>
  );
}

export default Home;
