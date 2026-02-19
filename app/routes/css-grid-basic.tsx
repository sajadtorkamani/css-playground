import type { Route } from './+types/home'
import { AppLayout } from '@/routes/app-layout'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CSS Grid - Basic' }]
}

export default function CssGridBasic() {
  return <>CssGridBasic</>
}
