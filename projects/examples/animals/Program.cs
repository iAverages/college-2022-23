using System;

public class Program {
	public static void Main() {
		Tortoise tortoise = new Tortoise();
		Turtle turtle = new Turtle();
		Snake snake = new Snake();
		Otter otter = new Otter();
		Gorilla gorilla = new Gorilla();
		Bat bat = new Bat();
    
		tortoise.getInfo();
		turtle.getInfo();
		snake.getInfo();
		otter.getInfo();
		gorilla.getInfo();
		bat.getInfo();
		Console.ReadLine();
    }
}