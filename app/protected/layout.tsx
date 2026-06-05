const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      {children}
    </main>
  );
}

export default ProtectedLayout;
