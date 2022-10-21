
namespace Pizzas
{
    partial class RegisterPage
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.PasswordInput = new System.Windows.Forms.TextBox();
            this.RegisterButton = new System.Windows.Forms.Button();
            this.LoginButton = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.EmailInput = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.ConfirmPasswordInput = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.AddressInput = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.PhoneNumberInput = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.NameInput = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // PasswordInput
            // 
            this.PasswordInput.Location = new System.Drawing.Point(302, 266);
            this.PasswordInput.Name = "PasswordInput";
            this.PasswordInput.Size = new System.Drawing.Size(205, 23);
            this.PasswordInput.TabIndex = 10;
            // 
            // RegisterButton
            // 
            this.RegisterButton.Location = new System.Drawing.Point(324, 509);
            this.RegisterButton.Name = "RegisterButton";
            this.RegisterButton.Size = new System.Drawing.Size(160, 38);
            this.RegisterButton.TabIndex = 13;
            this.RegisterButton.Text = "Register";
            this.RegisterButton.UseVisualStyleBackColor = true;
            this.RegisterButton.Click += new System.EventHandler(this.HandleRegister);
            // 
            // LoginButton
            // 
            this.LoginButton.Location = new System.Drawing.Point(324, 565);
            this.LoginButton.Name = "LoginButton";
            this.LoginButton.Size = new System.Drawing.Size(160, 38);
            this.LoginButton.TabIndex = 12;
            this.LoginButton.Text = "Back";
            this.LoginButton.UseVisualStyleBackColor = true;
            this.LoginButton.Click += new System.EventHandler(this.HandleReturn);
            // 
            // label3
            // 
            this.label3.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(302, 228);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(91, 25);
            this.label3.TabIndex = 11;
            this.label3.Text = "Password";
            this.label3.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // EmailInput
            // 
            this.EmailInput.Location = new System.Drawing.Point(302, 193);
            this.EmailInput.Name = "EmailInput";
            this.EmailInput.Size = new System.Drawing.Size(205, 23);
            this.EmailInput.TabIndex = 9;
            // 
            // label2
            // 
            this.label2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(302, 165);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(58, 25);
            this.label2.TabIndex = 8;
            this.label2.Text = "Email";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 20.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(342, 54);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(123, 37);
            this.label1.TabIndex = 7;
            this.label1.Text = "Register";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // ConfirmPasswordInput
            // 
            this.ConfirmPasswordInput.Location = new System.Drawing.Point(302, 330);
            this.ConfirmPasswordInput.Name = "ConfirmPasswordInput";
            this.ConfirmPasswordInput.Size = new System.Drawing.Size(205, 23);
            this.ConfirmPasswordInput.TabIndex = 14;
            // 
            // label4
            // 
            this.label4.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(302, 292);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(164, 25);
            this.label4.TabIndex = 15;
            this.label4.Text = "Confirm Password";
            this.label4.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // AddressInput
            // 
            this.AddressInput.Location = new System.Drawing.Point(302, 402);
            this.AddressInput.Name = "AddressInput";
            this.AddressInput.Size = new System.Drawing.Size(205, 23);
            this.AddressInput.TabIndex = 16;
            // 
            // label5
            // 
            this.label5.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label5.Location = new System.Drawing.Point(302, 364);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(79, 25);
            this.label5.TabIndex = 17;
            this.label5.Text = "Address";
            this.label5.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // PhoneNumberInput
            // 
            this.PhoneNumberInput.Location = new System.Drawing.Point(302, 470);
            this.PhoneNumberInput.Name = "PhoneNumberInput";
            this.PhoneNumberInput.Size = new System.Drawing.Size(205, 23);
            this.PhoneNumberInput.TabIndex = 18;
            // 
            // label6
            // 
            this.label6.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label6.Location = new System.Drawing.Point(302, 432);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(137, 25);
            this.label6.TabIndex = 19;
            this.label6.Text = "Phone number";
            this.label6.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // NameInput
            // 
            this.NameInput.Location = new System.Drawing.Point(302, 138);
            this.NameInput.Name = "NameInput";
            this.NameInput.Size = new System.Drawing.Size(205, 23);
            this.NameInput.TabIndex = 21;
            // 
            // label8
            // 
            this.label8.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label8.Location = new System.Drawing.Point(302, 110);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(62, 25);
            this.label8.TabIndex = 20;
            this.label8.Text = "Name";
            this.label8.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // RegisterPage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 625);
            this.Controls.Add(this.NameInput);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.PhoneNumberInput);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.AddressInput);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.ConfirmPasswordInput);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.PasswordInput);
            this.Controls.Add(this.RegisterButton);
            this.Controls.Add(this.LoginButton);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.EmailInput);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "RegisterPage";
            this.Text = "RegisterPage";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox PasswordInput;
        private System.Windows.Forms.Button RegisterButton;
        private System.Windows.Forms.Button LoginButton;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox EmailInput;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox ConfirmPasswordInput;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox AddressInput;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox PhoneNumberInput;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox NameInput;
        private System.Windows.Forms.Label label8;
    }
}