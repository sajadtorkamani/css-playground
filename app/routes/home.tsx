import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu'
import { Link } from 'react-router'
import { Card, CardContent } from '~/components/ui/card'
import { AppHeader } from '~/components/app-header'
import { AppLayout } from '~/routes/app-layout'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CSS Grid' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return <>Home</>
}
