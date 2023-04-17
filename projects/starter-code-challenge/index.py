# Range users can enter
MAX = 60;
MIN = 0

# Handles ensuring user enters a number and not characters
def getNumber(message: str):    
    while True:
        try: 
            return int(input(message))
        except:
            print("Please enter a number.")

while True: 
    number = getNumber(f"Please enter a time in minutes (between {MIN} and {MAX})")

    if (number > MAX or number < MIN):
        print(f"Please enter a number between {MIN} and {MAX}")
        
    break

print(number / 60)
