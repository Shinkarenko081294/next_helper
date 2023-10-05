export const getUserData = async () =>{
    const response = await fetch("/api")

    if(!response.ok) throw new Error("Проблема с запросом")

    return response.json()
}