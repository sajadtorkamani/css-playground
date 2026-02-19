import { Outlet } from 'react-router'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function AppLayout() {
  return (
    <>
      <AppSidebar />

      <main>
        <SidebarTrigger />
        {/*<Card className="mx-auto my-5 max-w-6xl border border-gray-400 p-5">*/}
        {/*  <CardContent>*/}
        <Outlet />
        {/*</CardContent>*/}
        {/*</Card>*/}
      </main>
    </>
  )
}
