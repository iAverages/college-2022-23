namespace Cats
{
    internal class Program
    {

        ///<summary> with a large program, I might instantiate a ProgramDriver class (or words to that effect) here. This is something I would create 
        /// with a large program, I might instantiate a ProgramDriver class (or words to that effect) here. This is something I would create to act as the 
        /// main controller of my program (again to get away from the static void main!)
        /// </summary>
        /// <param name="args">test</param>
        static void Main(string[] args)
        {
            Cat kitty = new Cat("Tabby","Multicoloured",false);
            Console.WriteLine("Your cat is a " + kitty.CatType + " and is " + kitty.CatColour);
            kitty.makeNoise();
            Console.ReadLine();
        }
    }
}