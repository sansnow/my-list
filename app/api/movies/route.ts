import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("query")?.trim();

    if (!search) {
        return NextResponse.json({ error: "Missing Query" }, { status: 400 });
    }

    const apiKey = process.env.OMDB_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "Missing Api Key" },
            { status: 500 }
        );
    }

    try {
        const params = new URLSearchParams({
            apikey: apiKey,
            s: search,
            type: "movie",
        })

        const response = await fetch(`http://www.omdbapi.com/?${params}`);

        if (!response.ok) {
            return NextResponse.json({ error: "failed to get movie data from the api" }, { status: response.status });
        }

        const data = await response.json()

        if (!data) {
            return NextResponse.json(
                { error: "Anime request Failed" },
                { status: 502 },
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}