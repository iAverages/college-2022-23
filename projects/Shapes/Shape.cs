public class Shape {
    private StringToNumber strToNum = new StringToNumber();
    private int a = 0;
    private int b = 0;
    private int c = 0;
    // declare private integer attributes  a, b and c and assign value of 0 to each


    // this constructor takes a single string value as a parameter
    // and assigns the result of calling strToNum.convert to attribute 'a'
    public Shape(string val1) {
        this.a = strToNum.convert(val1);
    }

    // Overload the constructor to take a single integer parameter
    // and assign the parameter to attribute 'a'
    public Shape(int a) {
        this.a = a;
    }

    // Overload the constructor to take two string parameters
    // and assign the result of calling strToNum.convert to attributes 'a' and 'b'
    public Shape(string a, string b) {
        this.a = strToNum.convert(a);
        this.b = strToNum.convert(b);
    }

    // Overload the constructor to take two integer parameters
    // and assign the parameters to attributes 'a' and 'b'
    public Shape(int a, int b) {
        this.a = a;
        this.b = b;
    }

    // Overload the constructor to take three string parameters
    // and assign the result of calling strToNum.convert to attributes 'a' and 'b' and 'c'
    public Shape(string a, string b, string c) {
        this.a = strToNum.convert(a);
        this.b = strToNum.convert(b);
        this.c = strToNum.convert(c);
    }

    // Overload the constructor to take three integer parameters
    // and assign the parameters to attributes 'a' and 'b' and 'c'
    public Shape(int a, int b, int c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // create a method called 'perimeter' that uses an if..elseif..else statement to:
    // call trianglePerimeter() if this.c > 0
    // else if call rectanglePerimeter() if this.b > 0
    // else call circlePerimeter()
    public void perimeter() {
        if (this.c > 0) {
            trianglePerimeter();
        } else if (this.b > 0) {
            rectanglePerimeter();
        } else {
            circlePerimeter();
        }
    }

    // create a method called 'area' that uses an if..elseif..else statement to:
    // call triangleArea() if this.c > 0
    // else if call rectangleArea() if this.b > 0
    // else call circleArea()
    public void area() {
        if (this.c > 0) {
            triangleArea();
        } else if (this.b > 0) {
            rectangleArea();
        } else {
            circleArea();
        }
    }

    private int calcTrianglePerimeter() {
        return this.a + this.b + this.c;
    }

    // create a method called 'circlePerimeter' to calculate and display the perimeter of a circle
    // using 'this.a' for the calculation 
    public void circlePerimeter() {
        Console.WriteLine("Circle perimeter:" + 2 * Math.PI * this.a);
    }

    // create a method called 'circleArea' to calculate and display the area of a circle
    // using 'this.a' for the calculation
    public void circleArea() {
        Console.WriteLine("Circle area:" + Math.PI * Math.Pow(this.a, 2));
    }

    // create a method called 'rectanglePerimeter' to calculate and display the perimeter of a rectangle
    // using 'this.a' and 'this.b' for the calculation
    public void rectanglePerimeter() {
        Console.WriteLine("Rectangle Perimeter: " + ((this.a * 2) + (this.b * 2)));
    }

    // create a method called 'rectangleArea' to calculate and display the area of a rectangle
    // using 'this.a' and 'this.b' for the calculation
    public void rectangleArea() {
        Console.WriteLine("Rectangle Area: " + this.a * this.b);
    }

    // create a method called 'trianglePerimeter' to calculate and display the perimeter of a triangle
    // using 'this.a', 'this.b' and 'this.c' for the calculation
    public void trianglePerimeter() {
        Console.WriteLine("Triangle Perimeter: " + this.calcTrianglePerimeter());
    }

    // create a method called 'triangleArea' to calculate and display the perimeter of a triangle
    // using 'this.a', 'this.b' and 'this.c' for the calculation
    // the area can be calculated using the formula Math.Sqrt(p*(p-a)*(p-b)*(p-c))
    // where p is the perimeter / 2
    // and 'a', 'b' and 'c' are the lengths of each side of the triangle
    public void triangleArea() {
        int p = this.calcTrianglePerimeter() / 2;
        Console.WriteLine("Triangle Area: " + (Math.Sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))));
    }

}