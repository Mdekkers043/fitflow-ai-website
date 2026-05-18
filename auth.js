<!-- auth.js -->
    // Wacht tot Supabase geladen is
    function initSupabase() {
        if (typeof Supabase === 'undefined') {
            console.error('Supabase library nog niet geladen');
            return;
        }

        const supabaseUrl = 'https://yjopbpjjusidgmobsazs.supabase.co';
        const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc';

        const supabase = Supabase.createClient(supabaseUrl, supabaseAnonKey);
        window.supabase = supabase;

        console.log('✅ Supabase is succesvol geïnitialiseerd');

        // Auth listener
        supabase.auth.onAuthStateChange((event, session) => {
            console.log('🔐 Auth event:', event);
            if (event === 'SIGNED_IN' && 
                (window.location.pathname.includes('login') || window.location.pathname.includes('signup'))) {
                window.location.href = 'dashboard.html';
            }
            if (event === 'SIGNED_OUT') {
                window.location.href = 'index.html';
            }
        });
    }

    // Voer init uit zodra de pagina geladen is
    window.addEventListener('load', initSupabase);
