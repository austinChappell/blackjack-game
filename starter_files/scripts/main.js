/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// Check to see if a card is a face card
function isFaceCard(card) {
  if (card === 'J' || card === 'Q' || card === 'K') {
    return true;
  } else {
    return false;
  };
};

// Returns an array of all the possible sums of ace cards
function aceOptions(num) {
  let optionsArr = [];
  for (let i = 0; i <= num; i++) {
    let total = (11 * i) + (num - i);
    optionsArr.push(total);
  }
  return optionsArr;
}

// Total the value of your hand
function handValue(hand) {
  let subTotal = 0;
  let total = 0;
  let numOfAces = 0;

  // If facecard, add 10, else if not ace, add the number, else add one to number of aces
  for (let i = 0; i < hand.length; i++) {
    if( isFaceCard(hand[i]) ) {
      subTotal += 10;
    } else if ( hand[i] !== 'A' ) {
      subTotal += Number(hand[i]);
    } else {
      numOfAces++;
    }
  }

  // returns an array of all possible ace sums
  let aceTotals = aceOptions(numOfAces);

  // equals lowest possible total
  total = subTotal + aceTotals[0];

  // check to see if it is under 21. will return the highest possible total without going over 21
  for (let i = 1; i < aceTotals.length; i++) {
    if (subTotal + aceTotals[i] <= 21) {
      total = subTotal + aceTotals[i];
    }
  }

  return total;

};


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
