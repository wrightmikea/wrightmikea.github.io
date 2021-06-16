wma = window.wma || {};
wma.router = wma.router || {};
wma.router.init = (routeIndex, routePath) => {
  resolveRoute = (path) => { return (path != '/') ? routePath(path) : routeIndex(); }
  router = ((ignoredEvent) => { return resolveRoute(window.location.hash.slice(1) || "/"); });
  ['load','hashchange'].forEach((event) => { window.addEventListener(event, router); });
};

    
