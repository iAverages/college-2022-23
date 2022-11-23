using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;

namespace SelfCheckin
{
    class Database
    {
        private static readonly string ConnectionString = @$"Data Source={Environment.MachineName}\SQLEXPRESS01;Database=doctor_surgery;Trusted_Connection=true";

        public static string[] GetAppointment(string lastName, string dob)
        {
            using SqlConnection conn = new SqlConnection(Database.ConnectionString);
            conn.Open();

            SqlCommand cmd = new SqlCommand(DatabaseQuery.GetAppointments, conn);
            cmd.Parameters.Add(new SqlParameter("@last_name", SqlDbType.NVarChar)).Value = lastName;            
            cmd.Parameters.Add(new SqlParameter("@dob", SqlDbType.NVarChar)).Value = dob;
            
            using SqlDataReader reader = cmd.ExecuteReader();

            List<string> results = new List<string>();
            while (reader.Read())
            {
                Debug.WriteLine(reader.GetValue(0) + " " + reader.GetValue(1));
                string date = reader.GetString(3);
                string doctorFirstName = reader.GetString(15);
                string doctorLastName = reader.GetString(16);
                string room = reader.GetString(17);
                results.Add($"{date} | {doctorFirstName} {doctorLastName} - Room: {room}");
            }
            Debug.WriteLine(results.ToArray());
            return results.ToArray();
        }
    }
}
