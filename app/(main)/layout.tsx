'use client';

import styles from './layout.module.css';
import SideBar from './_component/SideBar';


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex">
            <SideBar />
            <div className={styles['content']}>
                {children}
            </div>
        </div>
    );
}
