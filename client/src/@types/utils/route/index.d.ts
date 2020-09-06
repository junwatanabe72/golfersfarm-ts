type ROUTETYPE = typeof ROUTE.TOP | typeof ROUTE.USERS | typeof ROUTE.LOGIN | typeof ROUTE.SIGNUP;

type INFOROUTETYPE =
  | typeof INFOROUTE.CONTACT
  | typeof INFOROUTE.ABOUT
  | typeof INFOROUTE.PRIVACY
  | typeof INFOROUTE.TOS;

const ROUTE = {
  TOP: '/',
  USERS: '/users',
  LOGIN: '/login',
  SIGNUP: '/signup',
} as const;

const INFOROUTE = {
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TOS: '/tos',
} as const;
