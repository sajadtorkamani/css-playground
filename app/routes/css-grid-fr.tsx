import type { Route } from './+types/home'
import './css-grid-fr.style.css'
import { PageContainer } from '@/components/ui/page-container'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CSS Grid - fr' }]
}

export default function CssGridFr() {
  return (
    <PageContainer>
      <p className="mb-3">
        Here, we define a grid with three columns - each <code>1fr</code> wide.
      </p>

      <div className="mt-4 grid">
        {new Array(7).fill('x').map((_, index) => (
          <div key={index} className="grid-item">
            Item {index + 1}
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
