 # IMPORTANT READ FOLLOWING NOTE BEFORE STARTING 

This challenge is divided into three sections (Backend/FrontEnd/Database layers) to test different skills
You will have 2 Hours 30 Minutes (150 Minutes) to finish the challenges once stated. You will keep track of time yourself and stop working at the end of your time window
When you finish the challenge challenges, close this tab and reply to the email containing this link, to indicate that you have finished your challenges and this is ready for review.
All the changes are auto-saved so not worry about saving them.
You can skip the problem that you do not know or do not have the answer.
We are not expecting everyone to excel in all areas of this challenge 
You can test your code by running on your machine or internet editors to make sure it works as you are expecting.
Don't hesitate to add comments to your answers.
Please do not modify the questions.


## Backend Programming Challange (Solution can be written in any programming language you prefer)

__Problem 1:
Given an amount in dollars and a tax percentage. Return an array with the tax amount in cents.__


### __Problem 2:__
Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that shuffles the deck using the randint function. 
The random module includes a basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints). 


__Example:__
Input deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'].
Output = ['Q',K,2,3,4,5,6,7,8,9,10,'1','A','J'] or can be in any shuffled order







### __Problem 3:__
Given a string s, return the sum of the vowels in the string if each vowel's weight increases by 1 according to the vowels order. 

__Example: __ 
Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5  
Output = 22 (1 a's = 1*1 = 1 +  3 e's = 3*2 = 6 +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)




### __Problem 4:__
Write a recursive version of the previous function (or an iterative version if you already did a recursive version).



### __Problem 5:__
Write a regular expression to find any word between 4 and 9 letters long and containing either “odoo”, “code” or “work”?



FrontEnd Challange (JS/TS/CSS)
========================================


### __Problem 6:__
https://gist.github.com/sna-odoo/70229f8bc4c3a232324b3c70ca9d2e6b
Create a 3*3 box using flex property, For each box it should display zero as the count in the center




### __Problem 8:__
Extend the above feature by implementing the counter feature, the count has to be incremented only for the clicked box .



### __Problem 9:__
Extend the above feature by creating a "click here" button and upon clicking the button the count of all the boxes has to increment by 1 with 1 second gap for each increment.




### __Problem 10:__
Find count of 'odoo.sh' word in all sections of https://www.odoo.sh/faq webpage including collapsible divs using jquery.


Database Challange (SQL)
========================================


### __Problem 11:__
Write SQL statements to create database tables to store the details of users  of a basic ecommerce website.
Used PostgreSQL
10.1) Each user has a first name, last name, address and city id to store parent reference . City table has id and name column.

With the Fact that these tables are populated with 10000 users and 30 cities.
10.2) Write a SQL query to find cities with highest number of users and reutrn city id,name and number users in descending order.
10.3) How would you populate the tables with ramdon test datas for a tables created at problem 1.



