"use client"

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { useSearchParams } from "next/navigation";
import { BoardList } from "./_components/board-list";

interface DashboardSearchParams {
  search: string;
  favorites: string;
}

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const params: DashboardSearchParams = {
    search: searchParams.get("search") ?? "",
    favorites: searchParams.get("favorites") ?? "",
  };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
              <EmptyOrg />
            ) : (
             <BoardList
              orgId={organization.id}
             query={params}
             /> 
           )}    </div>
  );
};

export default DashboardPage;
