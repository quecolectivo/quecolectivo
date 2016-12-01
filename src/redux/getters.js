export const getPath = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname
})

export const getSearchData = (state) => ({
  searchData: state.global.searchData
})
