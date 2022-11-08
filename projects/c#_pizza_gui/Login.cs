using System;
using System.Windows.Forms;

namespace Pizzas
{
    public partial class Login : Form
    {
        public Login()
        {
            InitializeComponent();
        }

        private void HandleButtonClick(object sender, EventArgs e)
        {
            this.HandleLogin();
        }

        private void HandleSubmit(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                this.HandleLogin();
            }
        }

        private void HandleLogin()
        {
            string email = EmailInput.Text;
            string password = PasswordInput.Text;
            if (Database.CheckValidLogin(email, password))
            {
                new OrderPage().Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Incorrect login!");
            }
        }

        private void HandleRegister(object sender, EventArgs e)
        {
            new RegisterPage(this).Show();
            this.Hide();
        }
    }
}
