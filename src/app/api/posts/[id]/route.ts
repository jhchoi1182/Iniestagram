import { getPost } from "@/service/posts";
import { withSessionUser } from "@/util/session";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(request: NextRequest) {
  const context = await request.json();
  return withSessionUser(async () => {
    return getPost(context.params.id) //
      .then((data) => NextResponse.json(data));
  });
}
