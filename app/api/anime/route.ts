import { NextRequest, NextResponse } from "next/server";

const query = `
    query ($search: String){
      Page(page: 1, perPage: 8) {
        media(search: $search, type: ANIME, isAdult: false){
          id
          title {
            english
          }
          description(asHtml: false)
          coverImage {
            large
            medium
            color
            extraLarge
          }
          seasonYear
        }
      }
    }
  `;

type RawApiData = {
  id: number;
  title: {
    english: string | null;
    romaji: string;
  };
  description: string;
  coverUrl: {
    large: string;
    medium: string;
    extraLarge: string;
    color: string | null;
  };
  releaseYear: null | number;
};

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("query")?.trim();

  if (!search) {
    return NextResponse.json({ error: "Missing Query" }, { status: 400 });
  }

  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { search },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Anime Request Failed" },
        {
          status: response.status,
        },
      );
    }

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: "Anime request Failed" },
        { status: 502 },
      );
    }

    const apiRawDataArray: RawApiData[] = data.data.Page.media;

    return NextResponse.json(apiRawDataArray);
  } catch (error) {
    return NextResponse.json({ error, status: 500 });
  }
}
