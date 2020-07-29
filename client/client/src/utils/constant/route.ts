export const ROUTE = {
  TOP: "/",
  USERS: "/users",
  USER: "/users/:id",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup"
} as const


export type routeType = typeof ROUTE.TOP | 
                  typeof ROUTE.USERS | 
                  typeof ROUTE.USER |
                  typeof ROUTE.LOGIN |
                  typeof ROUTE.SIGNUP;
                  