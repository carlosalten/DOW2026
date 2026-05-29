export default defineEventHandler(async () => {
    return await prisma.producto.findMany()
})