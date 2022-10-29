import lS from "manager-local-storage";
import fakeUsers from "../mocks/fakeUsers";

export const getLogins = () => {
  const currentLogins = lS.get("biewwl-created-logins");
  if (currentLogins) fakeUsers.push(...currentLogins);
};

export const setLogin = (user) => {
  const currentLogins = lS.get("biewwl-created-logins");
  if (!currentLogins) return lS.set("biewwl-created-logins", [user]);
  lS.set("biewwl-created-logins", [...currentLogins, user]);
};
