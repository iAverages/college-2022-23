namespace Person
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello");
            Person person = new Person("dan", "raybone", 19, "yes");
            Student student = new Student("dan", "raybone", 19, "yes", "T-level", "pass", "better pass");
            Staff staff = new Staff("dan", "raybone", 19, "yes", "IT", "1000000000", "IT");
            person.greet();
            person.eat();
            person.sleep();
            
            student.greet();
            student.takeTest();

            staff.greet();
            staff.gradeTest();
        }
    }
}