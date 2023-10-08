import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest, res: NextResponse) {
  const path = request.nextUrl.searchParams.get("path");

  console.log(path);

  if (!path) {
    return Response.json({ message: "Missing path param" }, { status: 400 });
  }

  revalidateTag("about");

  return Response.json({ revalidated: true, now: Date.now() });
}
