'use client';
import styles from '../_styles/UserPage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { toast } from '@/utils/toast';

export default function CreateUserAccount() {
    const store = useUserStore();
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState<{ field: string; message: string }[]>([]);

    const navigateToLogin = () => {
        router.push('/user/login');
    };

    const createUser = async () => {
        if (password !== confirmPassword) {
            toast.fire({
                icon: 'error',
                title: 'Password and Confirm Password do not match!',
            });
            return;
        }

        const res = await store.createUser({
            name: fullName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            role: "USER"
        });

        if (res.status) {
            toast.fire({
                icon: 'success',
                title: 'Account created successfully!',
            });
            navigateToLogin();
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
            <span className={styles['login-text']}>Sign Up</span>
            <div className="flex flex-col gap-4">
                <span className="md:text-xl text-base">Full name</span>
                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            placeholder="Enter your Full Name"
                            value={fullName}
                            onChange={(e) => { setFullName(e.target.value); setErrorMessage([]); }}
                            className={`pl-12 pr-3 py-2 border ${errorMessage.find(err => err.field === 'name') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                        />
                    </div>
                    {
                        errorMessage.find(err => err.field === 'name') && (
                            <span className="text-red-500 text-sm">
                                {errorMessage.find(err => err.field === 'name')?.message}
                            </span>
                        )
                    }
                </div>
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
                    {
                        errorMessage.find(err => err.field === 'email') && (
                            <span className="text-red-500 text-sm">
                                {errorMessage.find(err => err.field === 'email')?.message}
                            </span>
                        )
                    }
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
                    {
                        errorMessage.find(err => err.field === 'password') && (
                            <span className="text-red-500 text-sm">
                                {errorMessage.find(err => err.field === 'password')?.message}
                            </span>
                        )
                    }
                </div>
                <span className="md:text-xl text-base">Confirm Password</span>
                <div className="flex flex-col gap-1">
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            placeholder="Confirm your Password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value); setErrorMessage([]); }}
                            type={confirmPasswordVisible ? "text" : "password"}
                            className={`pl-12 pr-3 py-2 border ${errorMessage.find(err => err.field === 'confirmPassword') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                        />
                        {confirmPasswordVisible ? (
                            <EyeOff
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                onClick={() => setConfirmPasswordVisible(false)}
                            />
                        ) : (
                            <Eye
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                onClick={() => setConfirmPasswordVisible(true)}
                            />
                        )}
                    </div>
                    {
                        errorMessage.find(err => err.field === 'confirmPassword') && (
                            <span className="text-red-500 text-sm">
                                {errorMessage.find(err => err.field === 'confirmPassword')?.message}
                            </span>
                        )
                    }
                </div>
                <button className={styles['login-button']} onClick={createUser}>Create an account</button>


                <div className={styles['dont-have-account']}>
                    <span>Already have an account? </span>
                    <span className={styles['link']} onClick={navigateToLogin}>Login</span>
                </div>
            </div>
        </div>
    )
}