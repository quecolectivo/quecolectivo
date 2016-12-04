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