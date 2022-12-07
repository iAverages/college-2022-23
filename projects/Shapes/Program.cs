using System;

public class Program {
	public static void Main() {
		//Circles have one value: radius
		Shape circle1 = new Shape(2);
		Shape circle2 = new Shape("three");

		//Rectangles have two values: width and height
		Shape rectangle1 = new Shape(5, 3);
		Shape rectangle2 = new Shape("seven", "two");

		//Triangles have three values: the lengths of each side of the triangle
		Shape triangle1 = new Shape("four", "six", "nine");
		Shape triangle2 = new Shape(3, 6, 5);

		//You can assume that shapes are either given only integer values, or only strings with one of the following values:
		//"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"

		//The perimeter of a circle is: 2 x pi x radius 
		//The area of a circle is: pi x radius^2
		//You can use 'Math.PI' as the value of pi
		//You can use 'Math.pow(value,2)' to square a value

		circle1.perimeter(); //Should print "This circle has a perimeter of 12.5663706..."
		circle1.area(); //Should print "This circle has an area of 12.5663706..."

		circle2.perimeter(); //Should print "This circle has a perimeter of 18.84955592..."
		circle2.area(); //Should print "This circle has an area of 28.27433388..."

		//The perimeter of a rectangle is: 2 x (width + height) 
		//The area of a rectangle is: width x height

		rectangle1.perimeter(); //Should print "This rectangle has a perimeter of 16"
		rectangle1.area(); //Should print "This rectangle has an area of 15"

		rectangle2.perimeter(); //Should print "This rectangle has a perimeter of 18"
		rectangle2.area(); //Should print "This rectangle has an area of 14"

		//The perimeter of a triangle with sides of length a, b and c is: a + b + c 
		//The area of a triangle with sides of length a, b and c and perimeter p is the square root of: 
		//p/2 x (p/2-a) x (p/2-b) x (p/2-c)
		//You can use 'Math.sqrt(value)' to get the square root of a value

		triangle1.perimeter(); //Should print "This triangle has a perimeter of 19"
		triangle1.area(); //Should print "This triangle has an area of 9.5622957..."

		triangle2.perimeter(); //Should print "This triangle has a perimeter of 14"
		triangle2.area(); //Should print "This triangle has an area of 7.48331477..."

		Console.ReadLine();
    }
}