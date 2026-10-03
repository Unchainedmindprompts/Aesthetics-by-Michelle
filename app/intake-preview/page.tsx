import type { Metadata } from "next";
import IntakePreview from "./IntakePreview";

export const metadata: Metadata = {
  title: "Intake questionnaire preview | Aesthetics by Michelle",
  description: "Review-only intake questionnaire. Use sample information only. Nothing is sent or saved.",
  robots: { index: false, follow: false, noarchive: true },
  alternates: { canonical: null },
  openGraph: {
    title: "Intake questionnaire preview | Aesthetics by Michelle",
    description: "A review-only preview. Use sample information only.",
  },
};

export default function IntakePreviewPage() {
  return <IntakePreview />;
}
