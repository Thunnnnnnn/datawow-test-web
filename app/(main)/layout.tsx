'use client';

import styles from './layout.module.css';
import SideBar from './_component/SideBar';
import { usePathname } from 'next/navigation'


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="flex">
            <SideBar />
            <div className={styles['content']}>
                {children}
            </div>
        </div>
    );
}
