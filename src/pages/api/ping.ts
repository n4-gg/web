import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler() {
  return NextResponse.json(
    {
      VERCEL: process.env.VERCEL,
      CI: process.env.CI,
      VERCEL_ENV: process.env.VERCEL_ENV,
      VERCEL_URL: process.env.VERCEL_URL,
      VERCEL_REGION: process.env.VERCEL_REGION,
    },
    { status: 200 }
  );
}
