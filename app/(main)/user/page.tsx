'use client';
import styles from './UserPage.module.css';
import { User } from 'lucide-react';
import { useConcertStore } from "@/store/concertStore";
import { useBookHistoryStore } from "@/store/bookHistoryStore";
import { useEffect } from "react";
import { toast } from '@/utils/toast';

export default function UserPage() {
    const store = useConcertStore();
    const bookHistoryStore = useBookHistoryStore();
    const fetchData = async () => {
        try {
            await store.getConcerts();
            await bookHistoryStore.getBookHistoriesByUser();
        } catch (error) {
            console.error("Error fetching concerts:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const reserveConcert = (concertId: number) => async () => {
        const find = bookHistoryStore.bookHistories.find((history) => history.concertId === concertId);
        if (find) {
            const res = await bookHistoryStore.updateBookHistoryStatus(find.id, 'RESERVE');
            if (res.status) {
                toast.fire({
                    icon: 'success',
                    title: 'Concert reserved successfully!',
                });
                await fetchData();
            } else {
                toast.fire({
                    icon: 'error',
                    title: res.message,
                });
            }
            return;
        } else {
            const res = await bookHistoryStore.createBookHistory(concertId);

            if (res.status) {
                toast.fire({
                    icon: 'success',
                    title: 'Concert reserved successfully!',
                });
                await fetchData();
            } else {
                toast.fire({
                    icon: 'error',
                    title: res.message,
                });
            }
        }
    }

    const cancelReservation = (concertId: number) => async () => {
        const bookHistory = bookHistoryStore.bookHistories.find((history) => history.concertId === concertId);
        if (bookHistory) {
            const res = await bookHistoryStore.updateBookHistoryStatus(bookHistory.id, 'CANCEL');
            if (res.status) {
                toast.fire({
                    icon: 'success',
                    title: 'Reservation canceled successfully!',
                });
                await fetchData();
            } else {
                toast.fire({
                    icon: 'error',
                    title: res.message,
                });
            }
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {store.concerts.map((concert) => (
                <div key={concert.id} className={styles['card']}>
                    <div className={styles['title']}>{concert.name}</div>
                    <div className={styles['description']}>
                        {concert.detail}
                    </div>

                    <div className={styles['footer']}>
                        <div className="flex gap-2">
                            <User />
                            <span className="text-xl">
                                {concert.limit}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            {
                                bookHistoryStore.bookHistories.find((history) => history.concertId === concert.id)?.status === 'RESERVE' ?
                                    <button className={styles['delete-btn']} onClick={cancelReservation(concert.id)}>
                                        Cancel
                                    </button> :
                                    <button className={styles['save-btn']} onClick={reserveConcert(concert.id)}>
                                        Reserve
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            ))
            }
        </div >

    )
}