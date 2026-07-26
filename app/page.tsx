'use client';

import styles from './mainpage.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigateToWorkspace = () => {
    router.push('/user/login');
  };

  const navigateToAdminPortal = () => {
    router.push('/admin/login');
  }

  return (
    <div className="flex flex-col flex-1 justify-center font-sans dark:bg-black p-10">
      <div className={styles['mainpage-header']}>
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <circle r="9" cx="12" cy="12" fill="#0070A4" />
        </svg>
        BRAND
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full mt-16">
        <div className="flex flex-col items-center justify-center gap-2 py-7">
          <span className="md:text-5xl text-3xl" style={{ fontWeight: 600 }}>Select Access Level</span>
          <span className="md:text-xl text-md">Lorem ipsum dolor sit amet consectetur. Elit purus nam.</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[40vw] w-[90vw] bg-white flex flex-col justify-start gap-6 text-primary" style={{ borderRadius: "10px", boxShadow: "0px 4px 22px 0px rgba(0, 0, 0, 0.05)", padding: '8%' }}>
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <path d="M22.5 45H52.5V42.9375C52.5 40.1875 51.125 37.9687 48.375 36.2812C45.625 34.5937 42 33.75 37.5 33.75C33 33.75 29.375 34.5937 26.625 36.2812C23.875 37.9687 22.5 40.1875 22.5 42.9375V45ZM42.7969 27.7969C44.2656 26.3281 45 24.5625 45 22.5C45 20.4375 44.2656 18.6719 42.7969 17.2031C41.3281 15.7344 39.5625 15 37.5 15C35.4375 15 33.6719 15.7344 32.2031 17.2031C30.7344 18.6719 30 20.4375 30 22.5C30 24.5625 30.7344 26.3281 32.2031 27.7969C33.6719 29.2656 35.4375 30 37.5 30C39.5625 30 41.3281 29.2656 42.7969 27.7969ZM0 75V7.5C0 5.4375 0.734375 3.67187 2.20312 2.20312C3.67187 0.734375 5.4375 0 7.5 0H67.5C69.5625 0 71.3281 0.734375 72.7969 2.20312C74.2656 3.67187 75 5.4375 75 7.5V52.5C75 54.5625 74.2656 56.3281 72.7969 57.7969C71.3281 59.2656 69.5625 60 67.5 60H15L0 75ZM11.8125 52.5H67.5V7.5H7.5V56.7187L11.8125 52.5Z" fill="#0070A4" />
            </svg>

            <span className="md:text-4xl text-2xl" style={{ fontWeight: 600 }}>User</span>
            <span className="md:text-base text-sm">Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non</span>
            <button className={`${styles['button-user']} md:py-3 md:px-4 px-3 py-2 rounded lg:text-2xl text-lg flex gap-3`} onClick={navigateToWorkspace}>
              Enter Workspace
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="md:w-[40vw] w-[90vw] bg-primary text-white flex flex-col justify-start gap-6" style={{ borderRadius: "10px", boxShadow: "0px 4px 22px 0px rgba(0, 0, 0, 0.05)", padding: '8%' }}>
            <svg className="shrink-0" width="75" height="64" viewBox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4062 25.5938C16.4688 22.6563 15 19.125 15 15C15 10.875 16.4688 7.34375 19.4062 4.40625C22.3438 1.46875 25.875 0 30 0C34.125 0 37.6562 1.46875 40.5938 4.40625C43.5312 7.34375 45 10.875 45 15C45 19.125 43.5312 22.6563 40.5938 25.5938C37.6562 28.5313 34.125 30 30 30C25.875 30 22.3438 28.5313 19.4062 25.5938ZM0 60V49.5C0 47.4375 0.53125 45.5 1.59375 43.6875C2.65625 41.875 4.125 40.5 6 39.5625C9.1875 37.9375 12.7812 36.5625 16.7812 35.4375C20.7812 34.3125 25.1875 33.75 30 33.75H31.3125C31.6875 33.75 32.0625 33.8125 32.4375 33.9375C31.9375 35.0625 31.5156 36.2344 31.1719 37.4531C30.8281 38.6719 30.5625 39.9375 30.375 41.25H30C25.5625 41.25 21.5781 41.8125 18.0469 42.9375C14.5156 44.0625 11.625 45.1875 9.375 46.3125C8.8125 46.625 8.35938 47.0625 8.01562 47.625C7.67188 48.1875 7.5 48.8125 7.5 49.5V52.5H31.125C31.5 53.8125 32 55.1094 32.625 56.3906C33.25 57.6719 33.9375 58.875 34.6875 60H0ZM52.5 63.75L51.375 58.125C50.625 57.8125 49.9219 57.4844 49.2656 57.1406C48.6094 56.7969 47.9375 56.375 47.25 55.875L41.8125 57.5625L38.0625 51.1875L42.375 47.4375C42.25 46.5625 42.1875 45.75 42.1875 45C42.1875 44.25 42.25 43.4375 42.375 42.5625L38.0625 38.8125L41.8125 32.4375L47.25 34.125C47.9375 33.625 48.6094 33.2031 49.2656 32.8594C49.9219 32.5156 50.625 32.1875 51.375 31.875L52.5 26.25H60L61.125 31.875C61.875 32.1875 62.5781 32.5313 63.2344 32.9063C63.8906 33.2813 64.5625 33.75 65.25 34.3125L70.6875 32.4375L74.4375 39L70.125 42.75C70.25 43.5 70.3125 44.2813 70.3125 45.0938C70.3125 45.9063 70.25 46.6875 70.125 47.4375L74.4375 51.1875L70.6875 57.5625L65.25 55.875C64.5625 56.375 63.8906 56.7969 63.2344 57.1406C62.5781 57.4844 61.875 57.8125 61.125 58.125L60 63.75H52.5ZM61.5469 50.2969C63.0156 48.8281 63.75 47.0625 63.75 45C63.75 42.9375 63.0156 41.1719 61.5469 39.7031C60.0781 38.2344 58.3125 37.5 56.25 37.5C54.1875 37.5 52.4219 38.2344 50.9531 39.7031C49.4844 41.1719 48.75 42.9375 48.75 45C48.75 47.0625 49.4844 48.8281 50.9531 50.2969C52.4219 51.7656 54.1875 52.5 56.25 52.5C58.3125 52.5 60.0781 51.7656 61.5469 50.2969ZM35.2969 20.2969C36.7656 18.8281 37.5 17.0625 37.5 15C37.5 12.9375 36.7656 11.1719 35.2969 9.70312C33.8281 8.23438 32.0625 7.5 30 7.5C27.9375 7.5 26.1719 8.23438 24.7031 9.70312C23.2344 11.1719 22.5 12.9375 22.5 15C22.5 17.0625 23.2344 18.8281 24.7031 20.2969C26.1719 21.7656 27.9375 22.5 30 22.5C32.0625 22.5 33.8281 21.7656 35.2969 20.2969Z" fill="white" />
            </svg>
            <span className="md:text-4xl text-2xl" style={{ fontWeight: 600 }}>Administrator</span>
            <span className="md:text-base text-sm">Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non</span>

            <button className={`${styles['button-admin']} md:py-3 md:px-4 px-3 py-2 rounded lg:text-2xl text-lg flex gap-3 items-center justify-center`} onClick={navigateToAdminPortal}>
              Enter Portal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#0070A4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
