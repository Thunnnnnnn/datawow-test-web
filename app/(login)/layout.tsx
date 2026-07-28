'use client';

import styles from './layout.module.css';
import { usePathname } from 'next/navigation';


export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="flex">
            <div className={styles['page-left']}>
                <div className={styles['brand-text']}>
                    <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg">
                        <circle r="16" cx="24" cy="24" fill="white" />
                    </svg>
                    <span>BRAND</span>
                </div>

                <span className={styles['bottom-text']}>
                    <span className={styles['title']}>
                        {
                            pathname.includes('admin') ? `“Powering the tools that power the team.”` : `“Your digital workspace, simplified.”`
                        }
                    </span>
                    <span className={styles['subtitle']}>Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non</span>
                </span>
            </div>
            <div className={styles['page-right']}>
                <div className={styles['content']}>
                    {children}
                </div>
            </div>
        </div>
    );
}
