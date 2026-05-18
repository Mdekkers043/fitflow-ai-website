// ✅ CONFIG
const SUPABASE_URL = "https://yjopbpjjusidgmobsazs.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqb3BicGpqdXNpZGdtb2JzYXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzIxMjgsImV4cCI6MjA5NDU0ODEyOH0.kBWUtet80YvCan3bbUfLzxMfAu0ekitejiDv3D5oIwc";

// ✅ INITIALISEER SUPABASE (BELANGRIJK)
const supabase = window.supabase = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("✅ Supabase geladen");

// --------------------------------------------------
// ✅ AUTH STATE LISTENER
// --------------------------------------------------

supabase.auth.onAuthStateChange((event, session) => {
    console.log("🔐 Auth event:", event);

    const path = window.location.pathname;

    // ✅ na login → dashboard
    if (event === "SIGNED_IN") {
        if (path.includes("login") || path.includes("signup")) {
            window.location.href = "dashboard.html";
        }
    }

    // ✅ na logout → homepage
    if (event === "SIGNED_OUT") {
        if (!path.includes("index")) {
            window.location.href = "index.html";
        }
    }
});

// --------------------------------------------------
// ✅ CHECK OF USER INGELOGD IS
// --------------------------------------------------

async function requireAuth() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        console.log("❌ Niet ingelogd → redirect");

        window.location.href = "login.html";
        return null;
    }

    return data.session.user;
}

// --------------------------------------------------
// ✅ GET CURRENT USER
// --------------------------------------------------

async function getCurrentUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
}

// --------------------------------------------------
// ✅ LOGOUT
// --------------------------------------------------

async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        return;
    }

    console.log("✅ Uitgelogd");
    window.location.href = "index.html";
}

// --------------------------------------------------
// ✅ EXPORT NAAR WINDOW (BELANGRIJK)
// --------------------------------------------------

window.requireAuth = requireAuth;
window.getCurrentUser = getCurrentUser;
window.logout = logout;
