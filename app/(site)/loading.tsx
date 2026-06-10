import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function SiteLoading() {
  return (
    <div>
      <Skeleton className="h-[50svh] w-full" />
      <Container size="wide" className="py-16">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-4 h-4 w-96 max-w-full" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="aspect-[3/2] w-full" />
              <Skeleton className="mt-4 h-5 w-3/4" />
              <Skeleton className="mt-2 h-4 w-1/2" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
