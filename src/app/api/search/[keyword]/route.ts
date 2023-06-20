import { searchUsers } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: { keyword: string };
};
export async function GET(_: NextRequest, context: Params) {
  return searchUsers(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
