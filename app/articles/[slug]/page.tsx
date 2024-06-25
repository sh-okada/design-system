import { EcTypography } from "@/components/core";

export default async function Page({ params }: { params: { slug: string } }) {
  return <EcTypography>This is Article Page. {params.slug}</EcTypography>;
}
