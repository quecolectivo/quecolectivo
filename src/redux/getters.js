export const getPath = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname
})

export const getSearchData = (state) => ({
  searchData: state.global.searchData
})

export const getMarkers = (state) => ({
    destinationMarker: state.global.markers.destination,
    originMarker: state.global.markers.origin
})

export const getRouteData = (state) => ({
  routeData: state.global.routeData
})

export const getSelectedRoute = (state) => ({
  selectedRoute: state.global.selectedRoute
})

export const getHoverRoute = (state) => ({
  hoverRoute: state.global.hoverRoute
})