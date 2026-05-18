// auth.js

const supabaseUrl = 'https://yjopbpjjusidgmobsazs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc';

// ✅ juiste initialisatie (let op kleine letter!)
const supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);

// Globaal beschikbaar maken
window.supabase = supabase.createClient(URL, KEY);

console.log("✅ Supabase initialized");

// ✅ Auth state listener
supabaseClient.auth.onAuthStateChange((event, session) => {
    console.log("🔐 Auth event:", event);

    const path = window.location.pathname;

    if (event === 'SIGNED_IN') {
        if (path.includes('login') || path.includes('signup')) {
            window.location.href = 'dashboard.html';
        }
    }

    if (event === 'SIGNED_OUT') {
        if (!path.includes('index')) {
            window.location.href = 'index.html';
        }
    }
});
