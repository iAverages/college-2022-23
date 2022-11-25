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

        public string CourseEnrolledOn { get => _courseEnrolledOn; set => _courseEnrolledOn = value; }
        public string CurrentCourseGrade { get => _currentCourseGrade; set => _currentCourseGrade = value; }
        public string TargetGrade { get => _targetGrade; set => _targetGrade = value; }

        public Student(string firstName, string lastName, int age, string niNumber, string courseEnrolledOn, string grade, string targetGrade) : base(firstName, lastName, age, niNumber)
        {
            this._courseEnrolledOn = courseEnrolledOn;
            this._currentCourseGrade = grade; 
            this._targetGrade = targetGrade;
        }

        public void takeTest()
        {
            Console.WriteLine($"{FirstName} is taking a test");
        }

        public override void greet()
        {
            Console.WriteLine($"Hello {FirstName}, age {Age} on {CourseEnrolledOn}");
        }
    }
}
