# liri-node-app
**now we start with song API**
first i install npm file json by (npm init and npm i)

# 1-    `and i set environmental variables and requires(
![Screen Shot 2019-10-01 at 11 32 04 PM](https://user-images.githubusercontent.com/25970156/66020657-61a21c80-e4ad-11e9-818e-7310e7738e08.png)
A- moment for timezone 

B- axios for API'S 

C- Spotify for song api

D- fs for files system )`


# 2- ``Create 2 variables Action and value 

A- var action for the switch function

B-  var value for API functions ``



# 3- ``make song function
![Screen Shot 2019-10-01 at 11 37 10 PM](https://user-images.githubusercontent.com/25970156/66020719-aa59d580-e4ad-11e9-9563-dc01d87b02a4.png)

and i grab the key from Keys.js
with this code 
var spotify = new Spotify(keys.spotify)``



# 4- ``i start with Movie API 
![Screen Shot 2019-10-02 at 12 05 48 AM](https://user-images.githubusercontent.com/25970156/66020759-cf4e4880-e4ad-11e9-8ae3-408e3bb24536.png)

A- create var called movie and = to value

B- start with axios git get APIs responses``


# 5- ``start with concert APIs 
![Screen Shot 2019-10-02 at 12 09 51 AM](https://user-images.githubusercontent.com/25970156/66020848-2b18d180-e4ae-11e9-939f-327a6b2de2b0.png)


A- create var called concert and = to value

B- start with axios git get APIs responses``

# 6- ``function total to grabing data from random.txt
![Screen Shot 2019-10-02 at 12 09 51 AM](https://user-images.githubusercontent.com/25970156/66020785-ea20bd00-e4ad-11e9-9d94-ac53c29f606e.png)

with this codefs.readFile('random.txt', 'utf8', function(err, data) and split ``
