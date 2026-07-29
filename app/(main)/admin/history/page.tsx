'use client';
import styles from './HistoryPage.module.css';
import { useEffect } from 'react';
import { useLogStore } from '@/store/logStore';
import { toThaiDateTime } from '@/utils/date';

export default function AdminHistoryPage() {
    const store = useLogStore();

    const fetchLogs = async () => {
        await store.getLogs();
    }

    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <div style={{ overflowX: 'auto', overflowY: 'auto' }} className="w-full">
            <table className={styles['table-style']}>
                <thead>
                    <tr>
                        <th>Date time</th>
                        <th>Username</th>
                        <th>Concert name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.logs.map((log) => (
                            <tr key={log.id}>
                                <td>{toThaiDateTime(log.createdAt.toString())}</td>
                                <td>{log.user.name}</td>
                                <td>{log.concert.name}</td>
                                <td>{log.action === 'BOOKED' ? 'RESERVE' : log.action}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}