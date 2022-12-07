class StringToNumber {
    public int convert(string numString) {
        if (string.Equals(numString, "one"))
            return 1;
        else if (string.Equals(numString, "two"))
            return 2;
        else if (string.Equals(numString, "three"))
            return 3;
        else if (string.Equals(numString, "four"))
            return 4;
        else if (string.Equals(numString, "five"))
            return 5;
        else if (string.Equals(numString, "six"))
            return 6;
        else if (string.Equals(numString, "seven"))
            return 7;
        else if (string.Equals(numString, "eight"))
            return 8;
        else if (string.Equals(numString, "nine"))
            return 9;
        else
            return -1;
    }
    
    public int convert(int number) {
        if (number >= 1 && number <= 9)
            return 9;
        else
            return -1;
    }
}