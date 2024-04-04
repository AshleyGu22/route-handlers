import { type NextRequest } from "next/server"
import { headers } from "next/headers"


export async function GET(request:NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const hearderList = headers()

    console.log(requestHeaders.get("Authorization"))
    console.log(hearderList.get("Authorization"))

    return new Response("<h1>profile api</h1>"),{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark",
        }
    }
}