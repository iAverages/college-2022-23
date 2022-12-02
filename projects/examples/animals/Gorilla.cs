using System;

public class Gorilla {
    private bool coldBlooded;
    private string skinType;
    private bool tail;
    private int legs;
    private int arms;
    private int wings;

    public Gorilla() {
        this.coldBlooded = false;
        this.skinType = "fur";
        this.tail = false;
        this.legs = 2;
        this.arms = 2;
        this.wings = 0;
    }
    
    private void move() {
        Console.WriteLine("This animal walks and climbs");
    }
    
    private void eat() {
        Console.WriteLine("This animal is a herbivore");
    }
    
    private void birth() {
        Console.WriteLine("This animal gives birth to live young");
    }
    
    public void getInfo() {
        Console.WriteLine("Gorilla:");
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
        Console.WriteLine();
    }
}