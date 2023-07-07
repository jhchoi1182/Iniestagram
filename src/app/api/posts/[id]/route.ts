import { getPost } from "@/service/posts";
import { withSessionUser } from "@/util/session";
import { NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(context: Params) {
  return withSessionUser(async () => {
    return getPost(context.params.id) //
      .then((data) => NextResponse.json(data));
  });
}
