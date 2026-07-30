'use client';
import styles from './UserPage.module.css';
import { User } from 'lucide-react';
import { useConcertStore } from "@/store/concertStore";
import { useBookHistoryStore } from "@/store/bookHistoryStore";
import { useEffect } from "react";
import { toast } from '@/utils/toast';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function UserPage() {
    const store = useConcertStore();
    const bookHistoryStore = useBookHistoryStore();
    const swal = withReactContent(Swal);
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

    const reserveConcert = (concertId: number, concertName: string) => async () => {
        const find = bookHistoryStore.bookHistories.find((history) => history.concertId === concertId);
        if (find) {
            swal.fire({
                html: `
                <div class="${styles['modal']}">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="48" height="48" fill="#1692EC"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20Zm1.93-7.494A1.982,1.982,0,0,0,13,14.257V15a1,1,0,0,1-2,0v-.743a3.954,3.954,0,0,1,1.964-3.5,2,2,0,0,0,1-2.125,2.024,2.024,0,0,0-1.6-1.595A2,2,0,0,0,10,9,1,1,0,0,1,8,9a4,4,0,1,1,5.93,3.505Z"/></svg>
                    </div>
                    <span class="${styles['title']}">Are you sure to reserve? <br/>"${concertName}"</span>
                    <div class="${styles['modal-actions']}">
                        <button id="cancel" class="${styles['cancel-btn']}">Cancel</button>
                        <button id="confirm" class="${styles['confirm-btn']}">Reserve</button>
                    </div>
                </div>
            `,
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    const cancelButton = document.getElementById('cancel');
                    const confirmButton = document.getElementById('confirm');

                    cancelButton?.addEventListener('click', () => {
                        swal.close();
                    });

                    confirmButton?.addEventListener('click', async () => {
                        swal.close();
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
                    });
                }
            })

        } else {
            swal.fire({
                html: `
                <div class="${styles['modal']}">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="48" height="48" fill="#1692EC"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20Zm1.93-7.494A1.982,1.982,0,0,0,13,14.257V15a1,1,0,0,1-2,0v-.743a3.954,3.954,0,0,1,1.964-3.5,2,2,0,0,0,1-2.125,2.024,2.024,0,0,0-1.6-1.595A2,2,0,0,0,10,9,1,1,0,0,1,8,9a4,4,0,1,1,5.93,3.505Z"/></svg>
                    </div>
                    <span class="${styles['title']}">Are you sure to reserve? <br/>"${concertName}"</span>
                    <div class="${styles['modal-actions']}">
                        <button id="cancel" class="${styles['cancel-btn']}">Cancel</button>
                        <button id="confirm" class="${styles['confirm-btn']}">Reserve</button>
                    </div>
                </div>
            `,
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    const cancelButton = document.getElementById('cancel');
                    const confirmButton = document.getElementById('confirm');

                    cancelButton?.addEventListener('click', () => {
                        swal.close();
                    });

                    confirmButton?.addEventListener('click', async () => {
                        swal.close();
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
                    });
                }
            })
        }
    }

    const cancelReservation = (concertId: number, name: string) => async () => {
        const bookHistory = bookHistoryStore.bookHistories.find((history) => history.concertId === concertId);
        if (bookHistory) {
            swal.fire({
                html: `
                <div class="${styles['modal']}">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#E63946"/>
                            <path d="M26.5444 24L32.4724 18.072C32.7903 17.7308 32.9634 17.2795 32.9552 16.8132C32.947 16.3468 32.7581 15.9019 32.4283 15.5721C32.0985 15.2423 31.6535 15.0534 31.1872 15.0452C30.7209 15.037 30.2696 15.2101 29.9284 15.528L24.0004 21.456L18.0724 15.528C17.7311 15.2101 17.2798 15.037 16.8135 15.0452C16.3472 15.0534 15.9023 15.2423 15.5725 15.5721C15.2427 15.9019 15.0538 16.3468 15.0455 16.8132C15.0373 17.2795 15.2104 17.7308 15.5284 18.072L21.4564 24L15.5284 29.928C15.1913 30.2655 15.002 30.723 15.002 31.2C15.002 31.677 15.1913 32.1345 15.5284 32.472C15.8659 32.8091 16.3234 32.9984 16.8004 32.9984C17.2774 32.9984 17.7349 32.8091 18.0724 32.472L24.0004 26.544L29.9284 32.472C30.2659 32.8091 30.7234 32.9984 31.2004 32.9984C31.6774 32.9984 32.1349 32.8091 32.4724 32.472C32.8094 32.1345 32.9988 31.677 32.9988 31.2C32.9988 30.723 32.8094 30.2655 32.4724 29.928L26.5444 24Z" fill="white"/>
                        </svg>
                    </div>
                    <span class="${styles['title']}">Are you sure to cancel reservation? <br/>"${name}"</span>
                    <div class="${styles['modal-actions']}">
                        <button id="cancel" class="${styles['cancel-btn']}">Cancel</button>
                        <button id="confirm" class="${styles['confirm-cancel-btn']}">Confirm</button>
                    </div>
                </div>
            `,
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    const cancelButton = document.getElementById('cancel');
                    const confirmButton = document.getElementById('confirm');

                    cancelButton?.addEventListener('click', () => {
                        swal.close();
                    });

                    confirmButton?.addEventListener('click', async () => {
                        swal.close();
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
                    });
                }
            })

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
                                    <button className={styles['delete-btn']} onClick={cancelReservation(concert.id, concert.name)}>
                                        Cancel
                                    </button> :
                                    <button className={styles['save-btn']} onClick={reserveConcert(concert.id, concert.name)} disabled={concert.limit - concert.bookedCount <= 0}>
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