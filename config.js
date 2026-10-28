/* Team Desk · ค่าการเชื่อมต่อ (anon key เป็นคีย์สาธารณะ ใส่ในเว็บได้ · ห้ามใส่ service_role key) */
window.TD_CONFIG = {
  SUPABASE_URL: "https://lcyzhgotqjpkuturbtcz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeXpoZ290cWpwa3V0dXJidGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MzA0MzgsImV4cCI6MjEwODIwNjQzOH0.P86jtoKu8bG25SPdO1syDxPqA0z6U4DLEpQ4MAMa2Wk",
  ORG_NAME: "มูลนิธิส่งเสริมศิลปาชีพฯ",
  // ชื่อสำนักงาน (แสดงในภาพรวมของหัวหน้าสำนักงาน และแบบฟอร์มนำเข้าสมาชิก)
  OFFICE_NAME: "สำนักงานสนับสนุนมูลนิธิและโครงการ",
  // ต้องตรงกับฟังก์ชัน td_email() ใน schema.sql
  EMAIL_DOMAIN: "teamdesk.local"
};
