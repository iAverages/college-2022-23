using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Person
{
    internal class Staff : Person
    {
        private string _jobTitle;
        private string _salary;
        private string _department;

        public string JobTitle { get => _jobTitle; set => _jobTitle = value; }
        public string Salary { get => _salary; set => _salary = value; }
        public string Department { get => _department; set => _department = value; }

        public Staff(string firstName, string lastName, int age, string niNumber, string jobTitle, string salary, string department) : base(firstName, lastName, age, niNumber)
        {
            this._jobTitle = jobTitle;
            this._salary = salary; 
            this._department = department;
        }

        public void gradeTest()
        {
            Console.WriteLine($"{FirstName} is marking  a test");
        }

        public override void greet()
        {
            Console.WriteLine($"Hello {FirstName}, you work as {JobTitle} in the {Department} department, with a £{Salary} salary");
        }
    }
}
