'use client';

import styles from './layout.module.css';
import { House, Inbox, RefreshCw, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation'


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="flex">
            <div className={styles['sidebar']}>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold ms-3 my-8" style={{ fontSize: '40px' }}>Admin</span>
                    <div className={styles['menu']}>
                        <div className={`${styles['menu-item']} ${pathname === '/admin' || pathname === '/user' ? styles['focus'] : ''}`}>
                            <House />
                            Home
                        </div>
                        {
                            pathname.split('/')[1] === 'admin' && (
                                <div className={`${styles['menu-item']} ${pathname === '/admin/history' ? styles['focus'] : ''}`}>
                                    <Inbox />
                                    History
                                </div>
                            )
                        }
                        <div className={styles['menu-item']}>
                            <RefreshCw />
                            {
                                pathname.split('/')[1] === 'admin' ? 'Switch to user' : 'Switch to admin'
                            }
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    <span className="ms-3 my-8 flex gap-2 items-center cursor-pointer" style={{ fontSize: '24px' }}>
                        <LogOut />
                        Logout
                    </span>
                </div>
            </div>
            <div className={styles['content']}>
                {children}
            </div>
        </div>
    );
}
