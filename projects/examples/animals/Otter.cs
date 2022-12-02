using System;

public class Otter {
    private bool coldBlooded;
    private string skinType;
    private bool tail;
    private int legs;
    private int arms;
    private int wings;

    public Otter() {
        this.coldBlooded = false;
        this.skinType = "fur";
        this.tail = true;
        this.legs = 4;
        this.arms = 0;
        this.wings = 0;
    }
    
    private void move() {
        Console.WriteLine("This animal walks and swims");
    }
    
    private void eat() {
        Console.WriteLine("This animal is an omnivore");
    }
    
    private void birth() {
        Console.WriteLine("This animal gives birth to live young");
    }
    
    public void getInfo() {
        Console.WriteLine("Otter:");
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