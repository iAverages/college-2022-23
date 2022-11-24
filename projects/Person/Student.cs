using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Person
{
    internal class Student : Person
    {
        private string _courseEnrolledOn;
        private string _currentCourseGrade;
        private string _targetGrade;

        public Student(string firstName, string lastName, int age, string niNumber) : base(firstName, lastName, age, niNumber)
        {
        }

        public void takeTest()
        {
            Console.WriteLine($"{FirstName} is taking a test");
        }

        public override void greet()
        {
            Console.WriteLine($"Hello {FirstName}, age {Age} on {}");
        }
    }
}
