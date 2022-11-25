public class Cleaner {
    //change ALL attributes to private
    private string name;

    public Cleaner(string name) {
        //set the cleaner name
        this.name = name;
    }

    public void cleanRooms(Hotel hotel) {
        for (int i = 0; i < hotel.checkRooms().Count; i++) {
            Room room = hotel.checkRooms()[i];
            if (room.isEmpty()) {
                room.makeClean();
                //Display a message to say a particluar room has been cleaned by a particular cleaner
                Console.WriteLine($"{this.name} has cleaned room {room.getNumber()}.");
            }
        }
    }
}