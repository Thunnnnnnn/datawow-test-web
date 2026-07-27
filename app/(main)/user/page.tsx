'use client';
import styles from './UserPage.module.css';
import { User } from 'lucide-react';

export default function UserPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className={styles['card']}>
                <div className={styles['title']}>Concert Name 1</div>
                <div className={styles['description']}>
                    Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.
                </div>

                <div className={styles['footer']}>
                    <div className="flex gap-2">
                        <User />
                        <span className="text-xl">
                            500
                        </span>
                    </div>

                    <button className={styles['delete-btn']}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>

    )
}