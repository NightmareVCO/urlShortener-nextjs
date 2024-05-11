import Image from "next/image";

import { getUserById } from "@/lib/data/user.data";

type UserProperties = {
  userId: string;
  image?: boolean;
};

const User = async ({ image, userId }: UserProperties) => {
  const user = await getUserById(userId);

  return (
    <div className="flex items-center justify-start gap-x-5">
      {image && (
        <Image
          src={`https://unavatar.io/${user?.username}`}
          alt="User Image"
          width={50}
          height={50}
          className="rounded-full"
        />
      )}
      <div className="flex flex-col items-start justify-center">
        <span className="">{user?.name}</span>
        <span className="text-xs text-main-dark-white">
          {user?.isAdmin ? "Administrator" : "User"}
        </span>
      </div>
    </div>
  );
};

export default User;
