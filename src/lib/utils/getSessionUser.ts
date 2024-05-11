import { auth } from "@lib/auth/auth";
import { UserSessionType } from "@models/user/user.schema";

type ExtendedUserSessionType = UserSessionType & { id?: string };

export const getSessionUser = async () => {
  const session = await auth();
  if (!session) return null;
  if (!session.user) return null;

  const user = session.user as ExtendedUserSessionType;

  return user;
};
