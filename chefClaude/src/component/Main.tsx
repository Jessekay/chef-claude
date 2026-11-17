export default function Main() {
  const ingredients:string [] = [];

  const ingredientsListItem = ingredients.map(ingredient => (
    <li>{ingredient}</li>
  ))

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("Form submitted!");
  }
  return (
    <main >
      <form action="" className="flex justify-center mt-60 border-gray-600 gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g: Oregano"
          aria-label="add ingredient"
          name = "ingredient"
          className="border border-gray-500 rounded-lg w-[40%] h-10 p-2 min-w-37.5 max-w-100"
        />

        <button className="text-amber-50 bg-black h-10 rounded-lg p-2">+ Add ingredient</button>
      </form>
      <ul>{ingredientsListItem}</ul>
    </main>
  )
}