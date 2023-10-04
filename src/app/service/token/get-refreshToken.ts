import Token from "@/app/models/token-model";


export async function getRefreshToken(id: string){
    try {
        console.log("id -", id)
        const tokenData = await Token.findOne({user: id})
        console.log("tokenData",tokenData)
        return tokenData.refreshToken
    }catch (e) {
        return null
    }
}