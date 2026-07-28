'use client';

import styles from '../layout.module.css';
import { House, Inbox, RefreshCw, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";
import { JWTDecodeResponse } from '@/model/jwt';
import { useEffect, useState } from 'react';

export default function SideBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [role, setRole] = useState('')
    const navigateTo = (path: string) => {
        router.push(path);
    };

    const logout = () => {
        document.cookie = 'token=; Max-Age=0; path=/;';
        router.push('/');
    }

    useEffect(() => {
        const payload = jwtDecode<JWTDecodeResponse>(document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
        setRole(payload.role);
    }, []);

    return (
        <div className={styles['sidebar']}>
            <div className="flex flex-col gap-4">
                <span className="font-semibold ms-3 mt-12 mb-2" style={{ fontSize: '40px' }}>{pathname.split('/')[1] === 'admin' ? 'Admin' : 'User'}</span>
                <div className={styles['menu']}>
                    <div className={`${styles['menu-item']} ${pathname === '/admin' || pathname === '/user' ? styles['focus'] : ''}`} onClick={() => navigateTo(pathname.split('/')[1] === 'admin' ? '/admin' : '/user')}>
                        <House />
                        Home
                    </div>
                    {
                        pathname.split('/')[1] === 'admin' && (
                            <div className={`${styles['menu-item']} ${pathname === '/admin/history' ? styles['focus'] : ''}`} onClick={() => navigateTo('/admin/history')}>
                                <Inbox />
                                History
                            </div>
                        )
                    }
                    {
                        role === 'ADMIN' && (
                            <div className={styles['menu-item']} onClick={() => navigateTo(pathname.split('/')[1] === 'admin' ? '/user' : '/admin')}>
                                <RefreshCw />
                                {
                                    pathname.split('/')[1] === 'admin' ? 'Switch to user' : 'Switch to admin'
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-8" onClick={logout}>
                <span className="ms-3 my-8 flex gap-2 items-center cursor-pointer" style={{ fontSize: '24px' }}>
                    <LogOut />
                    Logout
                </span>
            </div>
        </div>
    )
}