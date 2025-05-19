// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qzchpnqafhcpiurokszg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Y2hwbnFhZmhjcGl1cm9rc3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Nzk1MTEsImV4cCI6MjA2MzI1NTUxMX0.ceIgeL80HE-no0opIPVRmDIFynY3_7MkWv67qmtSj3I';
export const supabase = createClient(supabaseUrl, supabaseKey);