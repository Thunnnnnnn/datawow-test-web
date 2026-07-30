'use client';
import styles from '../_styles/UserPage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { toast } from '@/utils/toast';

export default function AdminLogin() {
    const store = useAuthStore();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<{ field: string; message: string }[]>([]);

    const navigateToCreateUserAccount = () => {
        router.push('/user/create-account');
    };

    const login = async () => {
        const res = await store.login({
            email: email,
            password: password
        });

        if (res.status) {
            if (res.data!.token) {
                document.cookie = `token=${res.data!.token}; path=/`;
                toast.fire({
                    icon: 'success',
                    title: 'Login successful!',
                }).then(() => {
                    router.push('/user');
                });

            }
        } else {
            if (res.code === 422) {
                setErrorMessage(res.errors ?? []);
            } else {
                toast.fire({
                    icon: 'error',
                    title: res.message,
                });
            }
        }
    }

    return (
        <div>
            <span className={styles['login-text']}>Login</span>
            <div className="flex flex-col gap-4">
                <span className="md:text-xl text-base">Email</span>
                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            placeholder="Enter your Email Address"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorMessage([]); }}
                            className={`pl-12 pr-3 py-2 border ${errorMessage.find(err => err.field === 'email') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                        />
                    </div>
                    {errorMessage.find(err => err.field === 'email') && (
                        <span className="text-red-500 text-sm">
                            {errorMessage.find(err => err.field === 'email')?.message}
                        </span>
                    )}
                </div>

                <span className="md:text-xl text-base">Password</span>
                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setErrorMessage([]); }}
                            type={passwordVisible ? "text" : "password"}
                            className={`pl-12 pr-3 py-2 border ${errorMessage.find(err => err.field === 'password') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                        />
                        {passwordVisible ? (
                            <EyeOff
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                onClick={() => setPasswordVisible(false)}
                            />
                        ) : (
                            <Eye
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                onClick={() => setPasswordVisible(true)}
                            />
                        )}
                    </div>
                    {errorMessage.find(err => err.field === 'password') && (
                        <span className="text-red-500 text-sm">
                            {errorMessage.find(err => err.field === 'password')?.message}
                        </span>
                    )}
                </div>
                <button className={styles['login-button']} onClick={login}>Login as User</button>


                <div className={styles['dont-have-account']}>
                    <span>Don't have an account? </span>
                    <span className={styles['link']} onClick={navigateToCreateUserAccount}>Create an account</span>
                </div>
            </div>
        </div>
    )
}