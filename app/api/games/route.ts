import { NextRequest, NextResponse } from "next/server";


type RawGameData = {
    id: number;
    name: string;
    released: string | null;
    background_image: string | null;
};

type RAWResponse = {
    count: number;
    results: RawGameData[];
}

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("query")?.trim();

    if (!search) {
        return NextResponse.json(
            { error: "Missing Query" },
            { status: 400 }
        );
    }

    const apiKey = process.env.RAWG_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "Missing API Key" },
            { status: 500 }
        );
    }

    try {
        const params = new URLSearchParams({
            key: apiKey,
            search: search,
            page_size: "8",
        });

        const response = await fetch(
            `https://api.rawg.io/api/games?${params}`
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "RAWG request failed" },
                { status: 502 }
            );
        }

        const data: RAWResponse = await response.json();

        const games = data.results.map((game) => ({
            id: game.id,
            title: game.name,
            type: "game",
            coverUrl: game.background_image,
            releaseYear: game.released
                ? parseInt(game.released.slice(0, 4), 10)
                : null,
        }));

        return NextResponse.json(games);
    } catch (error) {
        return NextResponse.json(
            { error: `Failed fetching games` },
            { status: 500 }
        );
    }
}