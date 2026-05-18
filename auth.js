<!-- auth.js -->
<script>
    const supabaseUrl = 'https://yjopbpjjusidgmobsazs.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc';

    const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

    // Globale auth listener
    supabase.auth.onAuthStateChange((event, session) => {
        console.log('🔐 Auth event:', event);

        if (event === 'SIGNED_IN') {
            if (window.location.pathname.includes('login') || 
                window.location.pathname.includes('signup')) {
                window.location.href = 'dashboard.html';
            }
        } 
        else if (event === 'SIGNED_OUT') {
            window.location.href = 'index.html';
        }
    });

    window.supabase = supabase;   // Maak beschikbaar voor alle pagina's
</script>
