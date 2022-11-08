using System;
using System.Windows.Forms;

namespace Pizzas
{
    public partial class RegisterPage : Form
    {
        private readonly Form ReturnForm = null;

        public RegisterPage()
        {
            InitializeComponent();
        }

        public RegisterPage(Form returnForm)
        {
            InitializeComponent();
            this.ReturnForm = returnForm;
        }

        private void Return()
        {
            if (this.ReturnForm != null)
            {
                this.ReturnForm.Show();
                this.Close();
            }
        }

        private void HandleReturn(object sender, EventArgs e)
        {
            this.Return();
        }

        private void HandleRegister(object sender, EventArgs e)
        {
            string name = NameInput.Text;
            string email = EmailInput.Text;
            string password = PasswordInput.Text;
            string confirmPassword = ConfirmPasswordInput.Text;
            string address = AddressInput.Text;
            string phoneNumber = PhoneNumberInput.Text;

            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match");
                return;
            }

            try
            {
                Database.SaveCustomer(name, email, password, address, phoneNumber);
                MessageBox.Show("Thank you for creating an account!");
                new OrderPage().Show();
                this.Close();
            } catch(DatabaseError err)
            {
                if (err.code == DatabaseErrors.EMAIL_EXISTS)
                {
                    MessageBox.Show("That is already registered");
                } else
                {
                    MessageBox.Show("An unknown error has occured");
                }
            }
        }
    }
}
