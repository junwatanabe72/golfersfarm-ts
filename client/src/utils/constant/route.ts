export const ROUTE = {
  TOP: '/',
  USERS: '/users',
  LOGIN: '/login',
  SIGNUP: '/signup',
} as const;

export const INFOROUTE = {
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TOS: '/tos',
} as const;

export type ROUTETYPE =
  | typeof ROUTE.TOP
  | typeof ROUTE.USERS
  | typeof ROUTE.LOGIN
  | typeof ROUTE.SIGNUP;

export type INFOROUTETYPE =
  | typeof INFOROUTE.CONTACT
  | typeof INFOROUTE.ABOUT
  | typeof INFOROUTE.PRIVACY
  | typeof INFOROUTE.TOS;

// export const ROUTE = {
//   BASE: {
//     TOP: "/",
//     USERS: "/users",
//     LOGIN: "/auth/login",
//     SIGNUP: "/auth/signup"
//   },
//   LOGIN: {
//     TOP: "/",
//     USERS: "/users",
//     LOGIN: "/auth/login",
//     SIGNUP: "/auth/signup"
//   },
//   INFOROUTE: {
//     CONTACT: "/contact",
//     ABOUT: "/about",
//     PRIVACY: "/privacy",
//     TOS: "/tos"
//   }
// } as const
