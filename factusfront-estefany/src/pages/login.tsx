import LoginForm from "@/components/loginForm";
import DefaultLayout from "@/layouts/default";

export default function LoginPage () {
    return(
        <DefaultLayout>
            <div className="w-1/2 mx-auto">
                <LoginForm/>
            </div>
        </DefaultLayout>
    )
}