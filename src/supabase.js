import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE.SUPABASE_URL 
const clave =  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
'sb_secret_pKWDhp0bEr3i9kwanzsIkA_CKD02lN'
export const supabase = createClient(url, clave)