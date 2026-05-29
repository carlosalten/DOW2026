export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { tipo, marca, modelo, stock, precio } = body
    
    const producto = await prisma.producto.create({
        data: {
            tipo: tipo.trim(),
            marca: marca.trim(),
            modelo: modelo.trim(),
            stock: Number(stock),
            precio: Number(precio),
        }
    })

    return {
        ok: true,
        producto
    }
})