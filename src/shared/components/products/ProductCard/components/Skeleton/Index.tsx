import { useUiStore } from "@/shared/store/ui/ui-store";
import { Card, Skeleton } from "@nextui-org/react";

export default function ProductSkeleton() {
  const rotate = useUiStore(state => state.rotate)
  return (
    <Card
      className={`bg-default-500 p-5 h-[30rem] space-y-5 ${rotate ? "w-[16rem]" : "w-[17.7rem]"}`}
    >
      <Skeleton className="rounded-lg bg-default-400" >
        <div className="h-60 rounded-lg"></div>
      </Skeleton>
      <Skeleton className="rounded-lg bg-default-400" >
        <div className="h-8 rounded-lg"></div>
      </Skeleton>
      <Skeleton className="rounded-lg bg-default-400" >
        <div className="h-4 rounded-lg"></div>
      </Skeleton>
      <Skeleton className="rounded-lg bg-default-400" >
        <div className="h-8 rounded-lg"></div>
      </Skeleton>
      <Skeleton className="rounded-lg bg-default-400" >
        <div className="h-8 rounded-lg"></div>
      </Skeleton>
    </Card>
  )
}
