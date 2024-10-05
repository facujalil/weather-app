import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${process.env.API_KEY}`
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
