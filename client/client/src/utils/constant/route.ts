export const ROUTE = {
  TOP: "/",
  USERS: "/users",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup"
} as const


export type ROUTETYPE = typeof ROUTE.TOP | 
                  typeof ROUTE.USERS | 
                  typeof ROUTE.LOGIN |
                  typeof ROUTE.SIGNUP;
                  