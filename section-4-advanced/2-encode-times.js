/*
encodeTimes()

The statements below list the times someone spent awake / asleep over the course of a 60 minute period:

A minute 0, someone wakes up
At minute 5, someone falls asleep
At minute 25, someone wakes up
At minute 30, someone falls asleep
At minute 55, someone wakes up

These times can be represented by the following array:
[0, 5, 25, 30, 55]

And now we can use a . character represents a minute spent awake
And now we can use a # character represents a minute spent asleep

So we could represent the data above by a string in the following way:
".....####################.....#########################....."

Implement a function that will take an array of time intervals for being awake/asleep over 60 mins and will generate a string encoding this information with a series of . and #
*/

function encodeTimes(times) {
  times.push(60);
  console.log(times);
  let timeDiff = [];

  for (let i = 1; i < times.length; i++) {
    let diff = times[i] - times[i - 1];
    timeDiff.push(diff);
  }
  console.log(timeDiff);
  let data = "";

  for (let j = 0; j < timeDiff.length; j++) {
    if (j % 2 === 0) {
      for (let i = 0; i < timeDiff[j]; i++) {
        data += ".";
      }
    } else {
      for (let i = 0; i < timeDiff[j]; i++) {
        data += "#";
      }
    }
  }

  console.log(data);
  return data;
}

encodeTimes([0, 24, 29]);

// Once you've passed the tests we've written, add some more test to this challenge too!

module.exports = encodeTimes;
