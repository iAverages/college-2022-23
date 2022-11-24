
namespace Person
{
    internal class Person
    {
        private string _firstName;
        private string _surname;
        private int _age;
        private string _niNumber;

        public string FirstName { get => _firstName; set => _firstName = value; }
        public string Surname { get => _surname; set => _surname = value; }
        public int Age { get => _age; set => _age = value; }
        public string NiNumber { get => _niNumber; set => _niNumber = value; }


        /// <summary>
        /// Create a new person
        /// </summary>
        public Person(string firstName, string lastName, int age, string niNumber)
        {
            // Could add error handling here. e.g. to make sure the age is above 0.
            // or make sure other values are not empty strings;

            // VS is not smart enough to use the setter here without complaing about
            // the values possibly not being set, even thought it changed it for me
            this._firstName = firstName;
            this._surname = lastName;
            this._age = age;
            this._niNumber = niNumber;
        }

        /// <summary>
        /// Greets the person
        /// </summary>
        public virtual void greet()
        {
            Console.WriteLine($"Hello {this.FirstName} {this.Surname}, you are {this.Age} years old.");
        }

        /// <summary>
        /// Makes the Person eat
        /// </summary>
        public void eat()
        {
            Console.WriteLine($"{this.FirstName} is taking a moment to eat.");
        }


        /// <summary>
        /// Makes the Person sleep
        /// </summary>
        public void sleep()
        {
            Console.WriteLine($"{this.FirstName} is sleeping.");
        }
    }
}
