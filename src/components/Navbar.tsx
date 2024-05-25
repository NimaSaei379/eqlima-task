import Button from "./Button";
import image from "../assets/logoGOLD.png";
import { useAuth } from "../hooks/useAuthorize";
export default function Navbar() {
  const { logout } = useAuth();
  return (
    <nav
      dir="rtl"
      className="w-full min-w-[370] text-text_primary flex py-2 px-3 bg-primary3 shadow-md shadow-black/35 justify-between items-center"
    >
      <div className="flex">
        <a href="#" className="flex items-center gap-5">
          <img width={50} src={image} />
          <h1 className="font-semibold text-lg text-secondary1">اقلیما گلد</h1>
        </a>
      </div>
      <div>
        <Button onClick={logout}>خروج</Button>
      </div>
    </nav>
  );
}
