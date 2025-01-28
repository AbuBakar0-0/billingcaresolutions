import { createClient } from "@supabase/supabase-js";

// Ensure environment variables are defined
const SUPABASE_URL = `https://hvyxalgfxjconsrlkwqw.supabase.co`;
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2eXhhbGdmeGpjb25zcmxrd3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczOTM3NDgsImV4cCI6MjA1Mjk2OTc0OH0.t6gJjV7CxgsqXD7cWkYMKm_04tQ7rdv1L_Wo-IlTCD0`;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "Supabase environment variables are not defined. Please check your .env file."
  );
}

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
