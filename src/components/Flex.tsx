export const Flex = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
            <h1 className="text-3xl font-bold mb-4 border bg-amber-500 p-2">Flex Component</h1>
            <p className="text-emerald-700 mb-4 mx-10">
                This is a simple example of a Flex component using Tailwind CSS. The container is set to display as a flexbox, with items centered both vertically and horizontally. The background color is set to gray, and the text color is emerald green. You can customize the styles further by modifying the Tailwind classes.
            </p>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
                Click me!</button>
        </div>
    )
}