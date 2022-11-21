using System.Diagnostics;

namespace SelfCheckin
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.appointments.Hide();
            this.appointmentsLabel.Hide();
        }

        private void Submit(object sender, EventArgs e)
        {
            string[] data = Database.GetAppointment(this.lastNameInput.Text, this.date.Text);
            Debug.WriteLine(data.Length);
            if (data.Length == 0)
            {
                MessageBox.Show("You do not have an appointment, please go to reception");
                return;
            }

            foreach (var row in data)
            {
                this.appointments.Items.Add(row);
            }

            this.appointmentsLabel.Show();
            this.appointments.Show();
        }
    }
}