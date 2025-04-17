import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/estefany-123"
          title="estefany-123 GitHub Page"
        >
          <span className="text-default-600">Created by</span>
          <p className="text-primary">estefany-123</p>
        </Link>
      </footer>
    </div>
  );
}
