using System.Collections.Generic;

public class Room {
    //set ALL attributes to private
    private int number;
    private int size;
    private List<Customer> occupants;
    private bool clean;

    public Room(int number, int size, bool clean) {
        //set the room number
        this.number
                = number;
        //set the size
        this.size = size;
        this.occupants = new List<Customer>();
        //set clean
        this.clean = clean;
    }


    public void addOccupant(Customer occupantIn) {
        if (this.occupants.Count < this.size) {
            this.occupants.Add(occupantIn);
            occupantIn.positiveExperience();
        } else {
            occupantIn.negativeExperience();
            return;
        }
        if (this.clean == true)
            occupantIn.positiveExperience();
        else
            occupantIn.negativeExperience();
        this.clean = false;
    }


    public void removeOccupant(Customer occupantOut) {
        int index = -1;
        for (int i = 0; i < this.occupants.Count; i++) {
            if (string.Equals(occupantOut.getName(), this.occupants[i].getName()))
                index = i;
        }
        if (index != -1)
            this.occupants.RemoveAt(index);
    }


    public int getNumber() {
        //return number
        return this.number;
    }

    public bool isEmpty() {
        //if..else statement to return true if number of occupants = 0 or false if not
        return this.occupants.Count == 0;
    }

    public void makeClean() {
        //set clean as true
        this.clean = true;
    }
}