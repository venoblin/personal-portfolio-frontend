import projects from '../data/projects'

export const capitalizeStr = (str) => {
  const capitalized = str.slice(0, 1).toUpperCase()
  const sliceStr = str.slice(1, str.length)

  return capitalized + sliceStr
}

export const sleep = async (time) => {
  return new Promise((res) => setTimeout(res, time))
}

export const storageGet = (key) => {
  const item = localStorage.getItem(key)
  return JSON.parse(item)
}

export const storageSet = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const storageRemove = (key) => {
  localStorage.removeItem(key)
}
export const findProjects = (types) => {
  return projects.filter((project) => {
    return project.types.some((t) => {
      for (let type of types) {
        if (t.toLowerCase() === type.toLowerCase()) {
          return t
        }
      }
    })
  })
}
