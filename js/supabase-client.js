// Shared Supabase client for BGMI login / register / profile pages.
// Loaded via <script type="module"> in each HTML page.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://vntcejhyrubtwbsxkyna.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_q3S0VgFcQ8Fg7MWUMgmM8A_ba-BOJLE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
