import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kdvqjgyjblqweskroxcx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdnFqZ3lqYmxxd2Vza3JveGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDg0NTQsImV4cCI6MjA2NjQyNDQ1NH0.lv3-HQQFL_Fjdr9jNB7IEnVR7H79jXVAD9j1B8dLSsY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
