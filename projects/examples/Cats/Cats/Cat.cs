using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cats
{
    class Cat
    {
        private string _catType = "";
        private string _catColour = "";
        private bool _isLarge = false;

        public Cat()
        {
            //empty constructor - does sod all
        }

        //constructor passing args on initialisation
        public Cat(string type, string colour, bool isFat)
        {
            _catType = type;
            _catColour = colour;
            _isLarge = isFat;
        }

        //generated Properties via VS2022
        public string CatType { get => _catType; set => _catType = value; }
        public string CatColour { get => _catColour; set => _catColour = value; }
        public bool IsLarge { get => _isLarge; set => _isLarge = value; }

        public void makeNoise()
        {
            Console.WriteLine("Meow!");
        }

        
    }
}
