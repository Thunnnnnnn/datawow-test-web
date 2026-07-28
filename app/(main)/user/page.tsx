'use client';
import styles from './UserPage.module.css';
import { User } from 'lucide-react';
import { useConcertStore } from "@/store/concertStore";
import { useEffect } from "react";

export default function UserPage() {
    const store = useConcertStore();

    useEffect(() => {
        const fetchConcerts = async () => {
            try {
                await store.getConcerts();
            } catch (error) {
                console.error("Error fetching concerts:", error);
            }
        };

        fetchConcerts();
    }, []);

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
                            <button className={styles['save-btn']}>
                                Reserve
                            </button>
                            <button className={styles['delete-btn']}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}