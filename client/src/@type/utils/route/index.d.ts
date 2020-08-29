import { ROUTE, INFOROUTE } from '../../../utils/constant/route';

type ROUTETYPE = typeof ROUTE.TOP | typeof ROUTE.USERS | typeof ROUTE.LOGIN | typeof ROUTE.SIGNUP;

type INFOROUTETYPE =
  | typeof INFOROUTE.CONTACT
  | typeof INFOROUTE.ABOUT
  | typeof INFOROUTE.PRIVACY
  | typeof INFOROUTE.TOS;
