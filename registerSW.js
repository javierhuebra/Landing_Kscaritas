if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Landing_Kscaritas/sw.js', { scope: '/Landing_Kscaritas/' })})}