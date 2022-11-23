namespace SelfCheckin
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.firstName = new System.Windows.Forms.Label();
            this.lastName = new System.Windows.Forms.Label();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.date = new System.Windows.Forms.DateTimePicker();
            this.appointmentsLabel = new System.Windows.Forms.Label();
            this.submit = new System.Windows.Forms.Button();
            this.appointments = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // firstName
            // 
            this.firstName.AutoSize = true;
            this.firstName.Location = new System.Drawing.Point(12, 21);
            this.firstName.Name = "firstName";
            this.firstName.Size = new System.Drawing.Size(75, 15);
            this.firstName.TabIndex = 1;
            this.firstName.Text = "Date Of Birth";
            // 
            // lastName
            // 
            this.lastName.AutoSize = true;
            this.lastName.Location = new System.Drawing.Point(12, 72);
            this.lastName.Name = "lastName";
            this.lastName.Size = new System.Drawing.Size(63, 15);
            this.lastName.TabIndex = 3;
            this.lastName.Text = "Last Name";
            // 
            // textBox2
            // 
            this.textBox2.Location = new System.Drawing.Point(12, 90);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(200, 23);
            this.textBox2.TabIndex = 2;
            // 
            // date
            // 
            this.date.CustomFormat = "yyyy-MM-dd";
            this.date.Format = System.Windows.Forms.DateTimePickerFormat.Custom;
            this.date.Location = new System.Drawing.Point(12, 44);
            this.date.Name = "date";
            this.date.Size = new System.Drawing.Size(200, 23);
            this.date.TabIndex = 4;
            // 
            // appointmentsLabel
            // 
            this.appointmentsLabel.AutoSize = true;
            this.appointmentsLabel.Location = new System.Drawing.Point(12, 162);
            this.appointmentsLabel.Name = "appointmentsLabel";
            this.appointmentsLabel.Size = new System.Drawing.Size(86, 15);
            this.appointmentsLabel.TabIndex = 6;
            this.appointmentsLabel.Text = "Appointments:";
            // 
            // submit
            // 
            this.submit.Location = new System.Drawing.Point(63, 119);
            this.submit.Name = "submit";
            this.submit.Size = new System.Drawing.Size(99, 23);
            this.submit.TabIndex = 7;
            this.submit.Text = "Submit";
            this.submit.UseVisualStyleBackColor = true;
            this.submit.Click += new System.EventHandler(this.Submit);
            // 
            // appointments
            // 
            this.appointments.FormattingEnabled = true;
            this.appointments.ItemHeight = 15;
            this.appointments.Location = new System.Drawing.Point(12, 180);
            this.appointments.Name = "appointments";
            this.appointments.Size = new System.Drawing.Size(200, 214);
            this.appointments.TabIndex = 8;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.appointments);
            this.Controls.Add(this.submit);
            this.Controls.Add(this.appointmentsLabel);
            this.Controls.Add(this.date);
            this.Controls.Add(this.lastName);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.firstName);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private Label firstName;
        private Label lastName;
        private TextBox textBox2;
        private DateTimePicker date;
        private Label appointmentsLabel;
        private Button submit;
        private ListBox appointments;
    }
}