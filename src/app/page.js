'use client'

import { useEffect } from "react";
import Image from "next/image";
import pic from '../app/images/android-chrome-384x384.png'
import WebImage from "./Components/WebImage";

export default function Home() {
  
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js',{scope:'/'})
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png">
        Image Link
      </a> */}
      <WebImage/>
    </main>
  );
}
