// ✅ CONFIG
const SUPABASE_URL = "https://yjopbpjjusidgmobsazs.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc";

// ✅ BELANGRIJK: juiste manier
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// ✅ zet globaal beschikbaar
window.supabase = supabaseClient;

console.log("✅ Supabase correct geïnitialiseerd");
