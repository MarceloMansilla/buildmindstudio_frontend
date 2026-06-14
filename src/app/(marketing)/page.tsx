import Link from "next/link";
import { Badge } from "@/src/shared/components/ui/badge";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Now in beta
        </Badge>
        <h1>
          Build your mind,{" "}
          <span className="text-muted-foreground">build your future</span>
        </h1>
        <p className="mt-6 mx-auto max-w-lg">
          Courses, tools, and resources for developers who want to grow. Learn
          at your own pace and track your progress in real time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/dashboard" className="btn-primary">
            Get started
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read the blog
          </Link>
        </div>
      </div>
    </div>
  );
}
