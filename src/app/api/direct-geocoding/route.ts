import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const limit = searchParams.get("limit");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appid=${process.env.API_KEY}`
    );
    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        {
          message: errorData.message || "An unknown error has occurred",
        },
        { status: errorData.cod }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "An unknown error has occurred",
      },
      { status: 500 }
    );
  }
}
