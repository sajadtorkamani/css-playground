import type { Route } from './+types/home'
import { Card, CardContent } from '@/components/ui/card'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CSS Grid - Basic' }]
}

export default function CssGridBasic() {
  return (
    <div className="p-4">
      <Card>
        <CardContent>TODO: Add a Grid example</CardContent>
      </Card>
    </div>
  )
}
