namespace SelfCheckin
{
    class DatabaseQuery
    {
        public static String GetAppointments = @"
SELECT * FROM appointments 
INNER JOIN patients
ON patients.id = appointments.patient_id
INNER JOIN doctors
ON doctors.id = appointments.doctor_id
WHERE patients.last_name = @last_name
AND patient.date_of_birth = @dob
";
    }
}
