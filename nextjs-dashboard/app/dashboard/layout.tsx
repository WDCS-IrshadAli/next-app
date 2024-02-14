import SideNav from '@/app/ui/dashboard/sidenav';

interface CustomerLayoutProps {
  children: React.ReactNode,
  // analytica: React.ReactNode,
  // revenue: React.ReactNode
}

export default function Layout({ children}: CustomerLayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">      <input type="text" name="abc" className="border-black border d-flex "/>{children}</div>
      
    </div>
  );
}