import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./routes/app-layout.tsx', [
    index('routes/home.tsx'),
    route('css-grid/basic', 'routes/css-grid-basic.tsx'),
  ]),
] satisfies RouteConfig
