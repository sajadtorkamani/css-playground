import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./routes/app-layout.tsx', [
    index('routes/home.tsx'),
    route('css-grids-basic', 'routes/css-grid-basic.tsx'),
    route('css-grids-fr', 'routes/css-grid-fr.tsx'),
  ]),
] satisfies RouteConfig
