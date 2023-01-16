"use client";
import UserList from "@/components/UserList";
import { useGetAllUsersTestQuery } from "@/utils/__generated__/graphql";

function Team() {
  const { data } = useGetAllUsersTestQuery();
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-3 pb-8 sm:pt-4 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Team page
        </h1>
        <div className="max-w-5xl ma-auto bg-white rounded text-center my-3 flex flex-col">
          <div>User List:</div>
          {data?.users && <UserList users={data.users}></UserList>}
        </div>
      </main>
    </div>
  );
}

export default Team;
