import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { authorizeUser } from "../../api";
import { useAuth } from "../../hooks/useAuthorize";
import logoW from "../../assets/logoW.png";
export default function LoginPage() {
  const [numberVale, setNumberValue] = useState<string>();
  const [passwordVale, setPasswordValue] = useState<string>();
  const { login } = useAuth();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = await authorizeUser();
    login(data);
  };
  return (
    <div className="w-full h-full flex items-center justify-center text-text_primary">
      <div className="w-4/5 sm:w-3/5 md:w-2/5 max-w-md bg-primary2 rounded-md px-2 py-2">
        <div className="flex items-center justify-between px-2 py-1">
          <h3>ورود</h3>
          <img src={logoW} width={50} height={50} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="تلفن"
            type="text"
            value={numberVale}
            handleChange={(e) => setNumberValue(e.target.value)}
            className="w-full"
          />
          <Input
            type="password"
            label="رمز عبور"
            value={passwordVale}
            handleChange={(e) => setPasswordValue(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-center py-2">
            <Button type="submit" className="w-full">
              تایید
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
