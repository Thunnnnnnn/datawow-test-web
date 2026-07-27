'use client';
import styles from './HistoryPage.module.css';

export default function AdminHistoryPage() {
    const toThaiDateTime = (dateTime: string) => {
        const date = new Date(dateTime);
        return date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    }

    return (
        <div className="w-full">
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
                    <tr>
                        <td>{toThaiDateTime('2023-08-01 10:00:00')}</td>
                        <td>user1</td>
                        <td>Concert Name 1</td>
                        <td>Reserve</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}