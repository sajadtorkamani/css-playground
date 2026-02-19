import { Card, CardContent } from '~/components/ui/card'
import { AppHeader } from '~/components/app-header'
import { Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <>
      <Card className="mx-auto my-5 max-w-6xl border border-gray-400 p-5">
        <CardContent>
          <AppHeader />
          <Outlet />
        </CardContent>
      </Card>
    </>
  )
}
