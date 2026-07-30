'use client';
import styles from './component.module.css';
import { Save } from 'lucide-react';
import { useState } from 'react';
import { useConcertStore } from '@/store/concertStore';
import { toast } from '@/utils/toast';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function CreatePage() {
    const [concertName, setConcertName] = useState('');
    const [totalSeats, setTotalSeats] = useState(0);
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState<{ field: string; message: string }[]>([]);
    const store = useConcertStore();
    const swal = withReactContent(Swal);

    const createConcert = async () => {
        swal.fire({
            html: `
                <div class="${styles['modal']}">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="48" height="48" fill="#1692EC"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20Zm1.93-7.494A1.982,1.982,0,0,0,13,14.257V15a1,1,0,0,1-2,0v-.743a3.954,3.954,0,0,1,1.964-3.5,2,2,0,0,0,1-2.125,2.024,2.024,0,0,0-1.6-1.595A2,2,0,0,0,10,9,1,1,0,0,1,8,9a4,4,0,1,1,5.93,3.505Z"/></svg>
                    </div>
                    <span class="${styles['title']}">Are you sure to create? <br/>"${concertName}"</span>
                    <div class="${styles['modal-actions']}">
                        <button id="cancel" class="${styles['cancel-btn']}">Cancel</button>
                        <button id="confirm" class="${styles['confirm-btn']}">Create</button>
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
                    const res = await store.createConcert({
                        name: concertName,
                        limit: totalSeats,
                        detail: description,
                    });

                    if (res.status) {
                        await store.getConcertCount();
                        toast.fire({
                            icon: 'success',
                            title: 'Create concert successfully',
                        });
                        setConcertName('');
                        setTotalSeats(0);
                        setDescription('');
                    } else {
                        if (res.code === 422) {
                            setErrorMessage(res.errors ?? []);
                        } else {
                            toast.fire({
                                icon: 'error',
                                title: res.message,
                            });
                        }
                    }
                });
            }
        })
    };

    return (
        <div className="flex">
            <div className={styles['card']}>
                <div className={styles['title']}>Create</div>
                <div className={styles['description']}>
                    <div className="flex flex-col md:grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">Concert Name</span>
                            <div className="flex flex-col gap-1">
                                <div className="relative">
                                    <input
                                        placeholder="Please input concert name"
                                        value={concertName}
                                        onChange={(e) => { setConcertName(e.target.value); setErrorMessage([]); }}
                                        className={`pl-3 pr-3 py-2 border ${errorMessage.find(err => err.field === 'name') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                                    />
                                </div>
                                {
                                    errorMessage.find(err => err.field === 'name') && (
                                        <span className="text-red-500 text-sm">
                                            {errorMessage.find(err => err.field === 'name')?.message}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">Total of seat</span>
                            <div className="flex flex-col gap-1">
                                <div className="relative">
                                    <input
                                        placeholder="Please input total seats"
                                        type="number"
                                        value={totalSeats}
                                        onChange={(e) => { setTotalSeats(Number(e.target.value)); setErrorMessage([]); }}
                                        className={`pl-3 pr-3 py-2 border ${errorMessage.find(err => err.field === 'limit') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                                    />
                                </div>
                                {
                                    errorMessage.find(err => err.field === 'limit') && (
                                        <span className="text-red-500 text-sm">
                                            {errorMessage.find(err => err.field === 'limit')?.message}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <span className="text-xl">Description</span>
                    <div className="flex flex-col gap-1">
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value); setErrorMessage([]); }}
                            placeholder="Please input description"
                            className={`pl-3 pr-3 py-2 border ${errorMessage.find(err => err.field === 'detail') ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full`}
                            rows={3}
                        ></textarea>
                        {
                            errorMessage.find(err => err.field === 'detail') && (
                                <span className="text-red-500 text-sm">
                                    {errorMessage.find(err => err.field === 'detail')?.message}
                                </span>
                            )
                        }
                    </div>
                </div>

                <div className={styles['footer']}>
                    <div>
                    </div>

                    <button className={styles['save-btn']} onClick={createConcert}>
                        <Save />
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}