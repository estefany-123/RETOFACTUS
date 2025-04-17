import { useAuth } from "@/providers/AuthProvider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const Navbar = () => {

  const { authenticated, user : {email} } = useAuth();

  return (
    <div className="flex items-center shadow-md">
      <div className="space-x-3 ms-3 me-auto flex items-center">
        <Link href="/" className="">
          <img src="/logo.svg" alt="logo" className="w-16 cursor-pointer" />
        </Link>
      </div>
      {authenticated ? (
        <div className="space-x-3 me-3 my-2 flex items-center">
          <p className="font-semibold">{email}</p>
          
          <Button color="danger" variant="bordered" onPress={() => {localStorage.removeItem("token"); localStorage.removeItem("email"); window.location.href = "/";}}>
            Log out
          </Button>
          
        </div>
      )
    
      : (
        <div className="space-x-3 me-3 my-2 flex items-center">
          <Link href="/login">
            <Button color="success" variant="bordered">
              Log in
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
