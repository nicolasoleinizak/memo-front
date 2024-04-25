import { fetchEndSession } from "@/components/game/fetchEndSession";
import { NextRequest } from "next/server";

export async function PATCH (req: NextRequest) {
    const method = req.method;

    const { id, retries } = await req.json();

    const response = await fetchEndSession(id, retries);

    return Response.json(response);
}