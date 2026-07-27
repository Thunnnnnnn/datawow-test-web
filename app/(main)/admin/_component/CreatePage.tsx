'use client';
import styles from './component.module.css';
import { Save } from 'lucide-react';
import { useState } from 'react';

export default function CreatePage() {
    const [concertName, setConcertName] = useState('');
    const [totalSeats, setTotalSeats] = useState(0);
    const [description, setDescription] = useState('');

    return (
        <div className="flex">
            <div className={styles['card']}>
                <div className={styles['title']}>Create</div>
                <div className={styles['description']}>
                    <div className="flex flex-col md:grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">Concert Name</span>
                            <div className="relative">
                                <input
                                    placeholder="Please input concert name"
                                    value={concertName}
                                    onChange={(e) => setConcertName(e.target.value)}
                                    className="pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xl">Total of seat</span>
                            <div className="relative">
                                <input
                                    placeholder="Please input total seats"
                                    type="number"
                                    value={totalSeats}
                                    onChange={(e) => setTotalSeats(Number(e.target.value))}
                                    className="pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <span className="text-xl">Description</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Please input description"
                        className="pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
                        rows={3}
                    ></textarea>
                </div>

                <div className={styles['footer']}>
                    <div>
                    </div>

                    <button className={styles['save-btn']}>
                        <Save />
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}