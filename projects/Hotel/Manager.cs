public class Manager {
    //set ALL attributes to private
    private string name;

    public Manager(string name) {
        //set the name of the manager
        this.name = name;
    }

    public void takeFeedback(Customer customer) {
        //Use an if..else if..else statement to display an appropriate message based on customer feedback
        //feedback > 0 then the customer was happy with their stay
        //feedback < 0 then the customer was unhappy with their stay
        //otherwise the customer found their stay OK
        if (customer.getFeedback() > 0) {
            Console.WriteLine($"{this.name} says: {customer.getName()} was happy with their stay.");
        } else if (customer.getFeedback() < 0) {
            Console.WriteLine($"{this.name} says: {customer.getName()} was un-happy with their stay.");
        } else {
            Console.WriteLine($"{this.name} says: {customer.getName()} found their stay ok.");
        }
    }
}