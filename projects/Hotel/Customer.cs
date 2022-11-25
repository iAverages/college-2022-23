public class Customer {
    //change ALL attributes to private
    private int roomBooking;
    private string name;
    private int feedback;

    public Customer(int roomBooking, string name) {
        this.roomBooking = roomBooking;
        //set the this.name to name
        this.name = name;

        //initialise feedback to 0
        this.feedback = 0;
    }

    public void positiveExperience() {
        //increment feedback by 1
        this.feedback++;
    }

    public void negativeExperience() {
        //decrement feedback by 1
        this.feedback--;
    }

    public int getFeedback() {
        //return the value of feedback
        return this.feedback;
    }

    public int getRoom() {
        //return the value of roomBooking
        return this.roomBooking;
    }

    public string getName() {
        //return the customer name for the booking
        return this.name;
    }
}