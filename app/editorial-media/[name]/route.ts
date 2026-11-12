// Image assets supplied for the November 2026 editorial preview.
// Static route generation snapshots the files into Vercel's deployment,
// so page images do not depend on expiring source URLs after build.
const assets: Record<string, string> = {
  "hero": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/1e3e8f69-c829-4573-9b12-c30e6dedb02d.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiOGM0YWVmZTVjOGEyNjg4NSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDU0MDUxN30.Sj9zljbmPGF6VjPRMqPS_mK78z0DvD7z-AUXrLbHAOg",
  "microneedling": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/b4d5fb45-d877-4ef4-84eb-1de0e9c9a6fa.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiN2Y2ZWJkNjAzNDA2ODMxZSIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDYxMDI3Mn0.iHenPr_avmohZhWQ2dD8CcEZt4TpKTljukZQoCPXUAI",
  "facials": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/2cd9f1c4-b51d-4191-9210-7a08c674a514.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNmFiZjc3MjkxNDc4MjA0NiIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDU2MTU3N30.GzQS0vD98U0Lch_RHM5wFopk4d-JRQrPR3UAN4jx2tQ",
  "chemical-peels": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/2b899da9-34e2-4b85-b41b-11d0e3b5cde6.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYTI2MzkwOTQ2NGVmMjdjMCIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDU5NzI2OH0.0ofkqe_0HU5iIHMNh1c31ISM2oVJW4Ty1aII8jJgrAs",
  "brow-lash": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/d769425d-f170-488f-9041-5873c56adb85.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiZGYxZTVmNWY2ZGE1OTJjNyIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5NDU1NzY2M30.bxS35ZgLJcRtLYUNUGQscVm9JPxFmdb77uXXoOG3RmY",
  "waxing": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/900d49b7-fd72-4f3b-8487-9ef4296c8da1.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiMWRiNDA5M2EyYzA0MDA5OCIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsImV4cCI6MTc5NDU5NzMwNn0.Us086LC48p8UwCTnLgW3gTNvxxI6gEgtdcgbuJVimtQ",
  "reiki": "https://d2jqrm6oza8nb6.cloudfront.net/datasets/316384b9-0850-4431-8d70-67254debd6b9.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNzdkM2EyYzFhNTUxMjExYiIsImJ1Y2tldCI6InJ1bndheS1kYXRhc2V0cyIsImV4cCI6MTc5NDYxNzY2NX0.SsNqMGzma25fRQP-nQBVsbAVRkc5A3uqhoyhw-VFW0Q"
};

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  const source = assets[params.name];
  if (!source) {
    return new Response("Not found", { status: 404 });
  }
  const image = await fetch(source, { cache: "force-cache" });
  if (!image.ok) {
    throw new Error(`Could not prepare preview image ${params.name}: ${image.status}`);
  }
  const bytes = await image.arrayBuffer();
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": String(bytes.byteLength),
    },
  });
}
