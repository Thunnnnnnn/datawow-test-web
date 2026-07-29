'use client';
import styles from './AdminPage.module.css';
import { Medal, User, CircleX, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import OverViewPage from './_component/OverViewPage';
import CreatePage from './_component/CreatePage';
import { useConcertStore } from "@/store/concertStore";
import { ConcertCountResponse } from '@/model/concert';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const store = useConcertStore();
    const fetchData = async () => {
        await store.getConcertCount();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className={styles['card']} style={{ background: '#0070A4' }}>
                    <User className="w-10 h-10 text-white" />
                    <span className="text-white lg:text-2xl text-lg">Total of seats</span>
                    <span className="text-white lg:text-6xl text-4xl">{store.allCount.count}</span>
                </div>
                <div className={styles['card']} style={{ background: '#00A58B' }}>
                    <Medal className="w-10 h-10 text-white" />
                    <span className="text-white lg:text-2xl text-lg">Reserve</span>
                    <span className="text-white lg:text-6xl text-4xl">{store.allCount.bookedCount}</span>
                </div>
                <div className={styles['card']} style={{ background: '#F96464' }}>
                    <CircleX className="w-10 h-10 text-white" />
                    <span className="text-white lg:text-2xl text-lg">Cancel</span>
                    <span className="text-white lg:text-6xl text-4xl">{store.allCount.cancelCount}</span>
                </div>
            </div>

            <div className={styles['tab']}>
                <span className={`${styles['tab-item']} ${activeTab === 'overview' ? styles['focus'] : ''}`} onClick={() => setActiveTab('overview')}>
                    Overview
                </span>
                <span className={`${styles['tab-item']} ${activeTab === 'create' ? styles['focus'] : ''}`} onClick={() => setActiveTab('create')}>
                    Create
                </span>
            </div>

            <div className={styles['content']}>
                {activeTab === 'overview' ? (
                    <OverViewPage />
                ) : (
                    <CreatePage />
                )}
            </div>
        </div>
    );
}