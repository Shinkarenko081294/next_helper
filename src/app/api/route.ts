import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {checkToken} from "@/app/service/token/checkToken";


export async function GET(req: Request){
    const accessToken = cookies().get('accessToken')
    console.log(accessToken)
    const data = await checkToken(accessToken)
    return NextResponse.json(data)
}