export const getPath = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname
})
