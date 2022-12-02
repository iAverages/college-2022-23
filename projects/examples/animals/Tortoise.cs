using System;

public class Tortoise {
    private bool coldBlooded;
    private string skinType;
    private bool tail;
    private int legs;
    private int arms;
    private int wings;

    public Tortoise() {
        this.coldBlooded = true;
        this.skinType = "scales";
        this.tail = true;
        this.legs = 4;
        this.arms = 0;
        this.wings = 0;
    }
    
    private void move() {
        Console.WriteLine("This animal walks");
    }
    
    private void eat() {
        Console.WriteLine("This animal is a herbivore");
    }
    
    private void birth() {
        Console.WriteLine("This animal lays eggs");
    }
    
    private void hibernate() {
        Console.WriteLine("This animal hibernates");
    }
    
    public void getInfo() {
        Console.WriteLine("Tortoise:");
        if (this.coldBlooded)
            Console.WriteLine("This animal is cold-blooded");
        else
            Console.WriteLine("This animal is warm-blooded");
        if (this.skinType != null)
            Console.WriteLine("This animal is covered in " + this.skinType);
        if (this.tail)
            Console.WriteLine("This animal has a tail");
        if (this.legs > 0)
            Console.WriteLine("This animal has " + this.legs + " legs");
        if (this.arms > 0)
            Console.WriteLine("This animal has " + this.arms + " arms");
        if (this.wings > 0)
            Console.WriteLine("This animal has " + this.wings + " wings");
        this.move();
        this.eat();
        this.birth();
        this.hibernate();
        Console.WriteLine();
    }
}