public class Hotel {
    //set ALL attributes to private
    private List<Room> rooms;

    public Hotel(List<Room> rooms) {
        //set rooms
        this.rooms = rooms;
    }

    public List<Room> checkRooms() {
        //return rooms
        return this.rooms;
    }
}