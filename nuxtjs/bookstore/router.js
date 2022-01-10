import { createRouter as createDefaultRouter } from './defaultRouter';
import Router from 'vue-router';

export function createRouter(ssrContext) {
  const defaultRouter = createDefaultRouter(ssrContext)

  var routes = defaultRouter.options.routes;

  return new Router({
    ...defaultRouter.options,
    routes: routes
  })
}