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
            MessageBox.Show(Database.GetAppointment(this.lastName.Text, this.date.Text));
            this.appointments.Items.Add("");
            this.appointmentsLabel.Show();
            this.appointments.Show();
        }
    }
}