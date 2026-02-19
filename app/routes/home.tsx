import type { Route } from './+types/home'
import { Card, CardContent } from '@/components/ui/card'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CSS Grid' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="p-4">
      <Card>
        <CardContent>
          <p>Explore the examples from the left sidebar.</p>
        </CardContent>
      </Card>
    </div>
  )
}
