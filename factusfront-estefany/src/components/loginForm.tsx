import { axiosAPI } from '@/api/axiosAPI'
import { useAuth } from '@/providers/AuthProvider'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { addToast } from '@heroui/toast'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {

    type Inputs = {
        username: string
        password: string
    }

    const { setUser , setAuthenticated } = useAuth();

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    async function onSubmit(data : Inputs) {

        const loginInfo = {
            grant_type: "password",
            client_id : "9e76fe1e-910d-4965-a004-af10a1cb2c3e",
            client_secret : "9evSUunHMSBCH3I8bH9oDCKpZ0hljXJJfoEGyvAx",
            username: data.username,
            password: data.password
        }

        try{
            const reponse : {data : {access_token : string} } = await axiosAPI.post("/oauth/token", loginInfo);
            addToast({title: "Logged in", description: "You are now logged in", color: "success"});
            localStorage.setItem("token", reponse.data.access_token);
            localStorage.setItem("email", data.username);
            setUser({ email : data.username});
            setAuthenticated(true);
            navigate("/");
        }
        catch(error : any){
            addToast({title: "Login Failed", description: error.response.data.error_description, color: "danger"});
        }
    }

    return(
        <div>
            <h1 className='text-3xl my-4 font-semibold'>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-2'>
                <Input
                    label='Username'
                    type='email'
                    {...register("username", { required: true })}
                />
                <p className='text-red-600'>
                    {errors.username && <span>This field is required</span>}
                </p>
            </div>
            <div className='space-y-2'>
                <Input
                    label='Password'
                    type='password'
                    {...register("password", { required: true })}
                />
                <p className='text-red-600'>
                    {errors.password && <span>This field is required</span>}
                </p>
            </div>
            <Button type="submit" color='success' variant='bordered'>Submit</Button>
            </form>
        </div>
    )
}