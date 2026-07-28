'use client';
import styles from '../_styles/UserPage.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Eye, EyeOff } from 'lucide-react';



export default function CreateUserAccount() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const navigateToLogin = () => {
        router.push('/user/login');
    };

    return (
        <div>
            <span className={styles['login-text']}>Sign Up</span>
            <div className="flex flex-col gap-4">
                <span className="md:text-xl text-base">Full name</span>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        placeholder="Enter your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-12 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
                    />
                </div>
                <span className="md:text-xl text-base">Email</span>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        placeholder="Enter your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
                    />
                </div>

                <span className="md:text-xl text-base">Password</span>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={passwordVisible ? "text" : "password"}
                        className="pl-12 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
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
                <span className="md:text-xl text-base">Confirm Password</span>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        placeholder="Confirm your Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={confirmPasswordVisible ? "text" : "password"}
                        className="pl-12 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
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
                <button className={styles['login-button']}>Create an account</button>


                <div className={styles['dont-have-account']}>
                    <span>Already have an account? </span>
                    <span className={styles['link']} onClick={navigateToLogin}>Login</span>
                </div>
            </div>
        </div>
    )
}