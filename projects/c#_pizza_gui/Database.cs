using System;
using System.Data;
using System.Data.SqlClient;

namespace Pizzas
{
    class Database
    {
        private static readonly string ConnectionString = @$"Data Source={Environment.MachineName}\SQLEXPRESS;Database=pizzas;Trusted_Connection=true";
        public static bool CheckValidLogin(string email, string password)
        {
            using SqlConnection conn = new SqlConnection();

            conn.ConnectionString = Database.ConnectionString;
            conn.Open();

            SqlCommand sqlCommand = new SqlCommand("SELECT * FROM customers WHERE email = @email;", conn);

            sqlCommand.Parameters.Add(new SqlParameter("@email", SqlDbType.NVarChar)).Value = email;
            using SqlDataReader reader = sqlCommand.ExecuteReader();

            if (reader.HasRows)
            {
                // We only want a single row so this is fine
                reader.Read();
                string storedPassword = reader.GetString("password");
                string salt = reader.GetString("salt");

                return SecurityHelper.CheckPassword(storedPassword, password, salt, 1000, 100);
            }
            else
            {
                return false;
            }
        }

        public static void SaveCustomer(string name, string email, string password, string address, string phoneNumber)
        {

            try
            {
                string salt = SecurityHelper.GenerateSalt(1000);
                string hashedPassword = SecurityHelper.HashPassword(password, salt, 1000, 100);

                using SqlConnection conn = new SqlConnection();

                conn.ConnectionString = Database.ConnectionString;
                conn.Open();

                SqlCommand sqlCommand = new SqlCommand("INSERT INTO customers(name, password, salt, email, address, phoneNumber) VALUES(@name, @password, @salt, @email, @address, @phoneNumber)", conn);

                sqlCommand.Parameters.Add(new SqlParameter("@name", name));
                sqlCommand.Parameters.Add(new SqlParameter("@password", hashedPassword));
                sqlCommand.Parameters.Add(new SqlParameter("@salt", salt));
                sqlCommand.Parameters.Add(new SqlParameter("@email", email));
                sqlCommand.Parameters.Add(new SqlParameter("@address", address));
                sqlCommand.Parameters.Add(new SqlParameter("@phoneNumber", phoneNumber));
                sqlCommand.ExecuteNonQuery();
            } catch (SqlException sqlError)
            {
                if (sqlError.Number == 2601 || sqlError.Number == 2627)
                {
                    throw new DatabaseError("");
                }
            }
        }
    }
}
