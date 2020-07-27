export const ROUTE = {
  INDEX: "/",
  USERS: "/users",
  USER: (id: number)=>{ return `/users/${id}`},
  EDITUSER: (id: number) => { return `/users/${id}/edit` },
  EDITGEAR: (id: number) => { return `/users/${id}/edit` }
} as const


export type routeType = typeof ROUTE.INDEX | 
                  typeof ROUTE.USERS | 
                  typeof ROUTE.USER | 
                  typeof ROUTE.EDITUSER |
                  typeof ROUTE.EDITGEAR;