export default defineEventHandler(async (event) => {
    const body = await readBody<{ a: number }>(event);
    console.log(body)
    return { success: true }
})