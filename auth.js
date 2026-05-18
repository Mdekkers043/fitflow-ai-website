// auth.js

const supabaseUrl = 'https://yjopbpjjusidgmobsazs.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc';

// ✅ BELANGRIJK: kleine letter supabase
window.supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

console.log("✅ Supabase initialized correct");
