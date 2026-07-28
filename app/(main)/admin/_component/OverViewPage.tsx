'use client';
import styles from './component.module.css';
import { User, Trash2 } from 'lucide-react';
import { useConcertStore } from '@/store/concertStore';
import { useEffect } from 'react';

export default function OverViewPage() {
    const store = useConcertStore();
    const fetchData = async () => {
        await store.getConcerts();
    };
    useEffect(() => {
        fetchData();
    }, []);

    const deleteConcert = (concertId: number) => async () => {
        const res = await store.deleteConcert(concertId);
        if (res.status) {
            await store.getConcerts();
            await store.getConcertCount();
            alert('Delete concert successfully');
        } else {
            alert(res.message);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {
                store.concerts.map((concert) => (
                    <div key={concert.id} className={styles['card']}>
                        <div className={styles['title']}>{concert.name}</div>
                        <div className={styles['description']}>
                            {concert.detail}
                        </div>

                        <div className={styles['footer']}>
                            <div className="flex gap-2">
                                <User />
                                <span className="text-xl">
                                    {concert.limit - concert.bookedCount}
                                </span>
                            </div>

                            <button className={styles['delete-btn']} onClick={deleteConcert(concert.id)}>
                                <Trash2 />
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}