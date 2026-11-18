export const Form = () => {
    return (
    <div className="flex flex-col">
        <h2 className="text-xl font-bold my-4 text-center">
        Registrar productos
        </h2>
        <div className="flex gap-4 flex-col my-4 bg-gray-200 p-5 rounded mx-auto w-1/2">
        <input
            className="p-2 border rounded bg-white w-full"
            type="text"
            name="nombre_producto"
            id="nombre"
            placeholder="Digite el nombre del producto"/>
        <input
            className="p-2 border rounded bg-white w-full"
            type="number"
            name="precio_producto"
            id="nombre"
            placeholder="Digite el precio del producto"/>
        </div>
    </div>
    )
}
