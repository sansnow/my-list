import { NextRequest, NextResponse } from "next/server";
import type { Media } from "@/types/media";


type RawApiBookData = {
    cover_i?: number;
    author_name?: string[];
    title: string;
    subtitle?: string;
    first_publish_year?: number;
    key: string;
}

type RawBookApiData = {
    docs: RawApiBookData[];
    numFound: number;
}

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("query")?.trim();

    if (!search) {
        return NextResponse.json(
            { error: "Missing Query" },
            { status: 400 }
        );
    }

    try {
        const params = new URLSearchParams({
            q: search,
            limit: "8",
        })

        const response = await fetch(`https://openlibrary.org/search.json?${params}`);

        if (!response.ok) {
            return NextResponse.json(
                { error: "failed to fetch books from openlibrary api" },
                { status: 500 }
            )
        }

        const data: RawBookApiData = await response.json();

        const books = data.docs.map((book) => ({
            id: book.key.replace("/works/", ""),
            author: book.author_name,
            title: book.title,
            type: "book",
            description: book.subtitle,
            coverUrl: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null,
            releaseYear: book.first_publish_year ?? null,
        }));

        return NextResponse.json(
            books
        )

    } catch (error) {
        return NextResponse.json(
            { error: `Failed to fetch books ${error}`},
            { status: 500 }
        )
    }
}