import chefClaude from "../assets/chef-claude-icon.png"

export default function Header() {
  return (
    <header className="flex items-center justify-center py-3 shadow-xl">
      <img src={chefClaude} alt="chef claude" className="h-20 mr-2 w-20" />
      <h1 className="font-inter text-[2rem]">Chef Claude</h1>
    </header>
  )
}