import { NextResponse, type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

type Resource = "queue";

const Resources: { [K in Resource]: string } = {
  queue: "1.1.0",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("resource");

  if (!input) {
    return NextResponse.json(
      { error: "No resource specified" },
      { status: 400 }
    );
  }

  const resource = Resources[input as Resource];

  if (!resource) {
    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  }

  return NextResponse.json(
    { version: resource },
    {
      status: 200,
      headers: {
        "cache-control": "public, s-maxage=86400, stale-while-revalidate=600",
      },
    }
  );
}
