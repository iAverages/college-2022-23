using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;
using System.Data;

namespace DoctorSurgery.Pages
{
    public class doctorsModel : PageModel
    {
        private readonly string ConnectionString = @$"Data Source={Environment.MachineName}\SQLEXPRESS;Database=doctors;Trusted_Connection=true";

        [BindProperty(SupportsGet = true)]
        public string? SearchString { get; set; }

        public void OnGet()
        {
            SearchString = "cunt"; 
            //if (string.IsNullOrEmpty(SearchString))
            //{
            //    return;
            //}

            //using SqlConnection conn = new SqlConnection();

            //conn.ConnectionString = this.ConnectionString;
            //conn.Open();

            //SqlCommand sqlCommand = new SqlCommand("SELECT * FROM customers WHERE last_name = @last_name;", conn);

            //sqlCommand.Parameters.Add(new SqlParameter("@last_name", SqlDbType.NVarChar)).Value = email;
            //using SqlDataReader reader = sqlCommand.ExecuteReader();

            //while (reader.HasRows)
            //{
                
            //}
        }

    }
}
