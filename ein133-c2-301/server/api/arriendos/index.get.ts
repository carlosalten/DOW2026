export default defineEventHandler(async () => {
    return await prisma.arriendo.findMany()
})