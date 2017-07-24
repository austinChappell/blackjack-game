# Black Jack Project

## Project Details

The purpose of the project was to take any hand of cards, and come up with the total value. The part that takes some logic is figuring out the aces, and how to get the highest possible total without exceeding 21.

### Things to know

The function isFaceCard takes a card as a parameter. If the card is equal to 'J', 'Q', or 'K', it returns true. Otherwise it returns false.

The function aceOptions is passed a number, which will be the number of aces in your hand. This function will give you all the possible totals you can come up with based on the number of aces you have. For example:

- 0 aces : [0]
- 1 ace : [1, 11]
- 2 aces : [2, 12, 22]
- 3 aces : [3, 13, 23, 33]

This array will be used later in the handValue function.

The handValue function sets zero values for subTotal, total, and numOfAces. A for loop is then run through your hand array. If isFaceCard returns true, 10 is added to the subTotal. Else, if the card is not an ace, add the value of the number. Else, add one to the number of aces. The array returned from aceOptions(numOfAces) is stored in the variable aceTotals.

The total equals the sum of subTotal and the first number in the aceTotals array. If you have no aces, that number is zero. If you have one or more aces, that number is the lowest possible sum you can have.

The next for loop gets the total as high as it possibly can without going over 21. If the total was already over 21 in its lowest possible sum, it will remain unchanged.
