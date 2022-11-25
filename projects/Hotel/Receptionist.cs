using System;

public class Receptionist {
    //set ALL attributes to private
    private string name;

    public Receptionist(string name) {
        //set the name of the receptionist
        this.name = name;
    }

    public void checkIn(Hotel hotel, Customer customer) {
        Room room = hotel.checkRooms()[customer.getRoom() - 1];
        //add the customer as an occupant for the room
        room.addOccupant(customer);

        //Display a message to say which receptionist booked the customer in
        Console.WriteLine($"{this.name} has checked in {customer.getName()}");
    }

    //1 Mark for implementing checkOut in the Receptionist class
    //1 Mark for appropriately changing how class attributes are accessed in checkOut
    public void checkOut(Hotel hotel, Customer customer, Manager manager) {
        Room room = hotel.checkRooms()[customer.getRoom() - 1];
        //remove the customer as an occupant of the room
        room.removeOccupant(customer);

        //Display a message to say which receptionist checked the customer out
        Console.WriteLine($"{this.name} has checked out {customer.getName()}");

        //the manager takes feedback for the customer
        manager.takeFeedback(customer);
    }
}