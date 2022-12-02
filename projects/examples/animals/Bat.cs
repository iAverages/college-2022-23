using System;

public class Bat {
    private bool coldBlooded;
    private string skinType;
    private bool tail;
    private int legs;
    private int arms;
    private int wings;

    public Bat() {
        this.coldBlooded = false;
        this.skinType = "fur";
        this.tail = true;
        this.legs = 2;
        this.arms = 0;
        this.wings = 2;
	}
	
    private void move() {
        Console.WriteLine("This animal flies");
    }
    
    private void eat() {
        Console.WriteLine("This animal is an omnivore");
    }
    
    private void birth() {
        Console.WriteLine("This animal gives birth to live young");
    }
    
    private void hibernate() {
        Console.WriteLine("This animal hibernates");
    }
    
    public void getInfo() {
        Console.WriteLine("Bat:");
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