// Queues follow the FIFO... first in first out logic which is just the opposite of stacks. 
// An example could be when people are in line.. the first person is going to be the firstone getting the service.
// Requesting Uber or Lift, you are gonna get a ride in the oder you requested. 

// LOOKUP  O(n) --> usually not used.
// ENQUEUE O(1) --> Same as push items in line.
// DEQUEUE O(1) --> Same as POP or removing person from line. Unlike pop, dequeue does not take the last item in line, but the first item in line. 
// PEEK    O(1)

// why would you pick a QUEUE over an ARRAY?
// Well arrays are very inneficient

//You always want to built your queues with LinkedLists. The reson is because when removing items the list do not have to be shifted and it faster. The head and tail are just moved and nothing else have to be shifted or moved. 