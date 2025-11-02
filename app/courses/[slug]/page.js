import { CadCustomizationPage } from "@/components/autocad-customization-page";
import { getCourseBySlug } from "@/lib/courses";

export default function CourseDetailPage({ params }) {
  const course = getCourseBySlug(params.slug);
  // Reuse the same layout component; pass course data via props if needed later
  return <CadCustomizationPage course={course} />;
}

export function generateStaticParams() {
  // Optional static params for known slugs
  const { courses } = require("@/lib/courses");
  return courses.map((c) => ({ slug: c.slug }));
}


