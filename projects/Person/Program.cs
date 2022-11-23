namespace Person
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello");
            Person person1 = new Person("dan", "raybone", 19, "yes");
            Person person2 = new Person("archie", "tilling", 17, "yes");
            Person person3 = new Person("callum", "macdonal", 12, "yes");

            person1.greet();
            person2.eat();
            person3.sleep();
        }
    }
}