// Profile of user wall to add comment / user posting the comment / users list
export function setLoading(loader) {
  return {
    type: 'LOADER',
    payload: {
      loader
    }
  }
}

export function location(current) {
  return {
    type: 'LOCATION',
    payload: {
      current
    }
  }
}