using System;
using System.Collections.Generic;

public class Program {
	
	public static void Main() {
		List<Room> rooms = new List<Room>();
		rooms.Add(new Room(1, 1, false));
		rooms.Add(new Room(2, 2, true));
		rooms.Add(new Room(3, 1, false));
		Hotel hotel = new Hotel(rooms);
		Customer customer1 = new Customer(1, "Mrs. White");
		Customer customer2 = new Customer(2, "Mr. Green");
		Customer customer3 = new Customer(2, "Miss. Scarlett");
		Customer customer4 = new Customer(3, "Mrs. Peacock");
		Customer customer5 = new Customer(2, "Prof. Plum");
		Customer customer6 = new Customer(3, "Col. Mustard")  ;  
		Receptionist receptionist = new Receptionist("Jane");
		Cleaner cleaner = new Cleaner("Michael");
		Manager manager = new Manager("Janhavi");
			    
		receptionist.checkIn(hotel, customer1);
		receptionist.checkIn(hotel, customer2);
		receptionist.checkIn(hotel, customer3);
		receptionist.checkOut(hotel, customer1, manager);
			    
		cleaner.cleanRooms(hotel);
			    
		receptionist.checkIn(hotel, customer4);
		receptionist.checkOut(hotel, customer4, manager);
		receptionist.checkIn(hotel, customer5);
		receptionist.checkOut(hotel, customer5, manager);
		receptionist.checkOut(hotel, customer2, manager);
		receptionist.checkOut(hotel, customer3, manager);
			    
		cleaner.cleanRooms(hotel);
		    
		receptionist.checkIn(hotel, customer6);
		receptionist.checkOut(hotel, customer6, manager);
		Console.ReadLine();
    }
}