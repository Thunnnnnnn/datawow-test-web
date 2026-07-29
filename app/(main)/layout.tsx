'use client';

import styles from './layout.module.css';
import SideBar from './_component/SideBar';
import MobileSideBar from './_component/MobileSideBar';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(false);
    const handleMenuClick = () => {
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        setShowSidebar(false);
    },[pathname]);

    return (
        <div className="flex">
            <SideBar />
            {
                showSidebar && (<MobileSideBar />)
            }
            <div className={styles['content']} onClick={() => setShowSidebar(false)}>
                {children}
            </div>
            <button className={styles['menu-button']} onClick={(handleMenuClick)}>
                <Menu className="w-6 h-6" />
            </button>
        </div>
    );
}
