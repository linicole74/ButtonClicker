To Peace:

Please look at the TODO in GlobalClicks.tsx. Also, for dev purposes, comment out all of the code in getData of HomeScreen.tsx and just return a blank string so it doesn't throw an error, and comment out the supabase import. If there's anything related to a database, you can comment it out.


To Aakash:

Please make a screen as screen 4 (the screens are numbered 0-4 through the hook ```[screen, setScreen]```, and ```App.tsx``` uses the value of ```screen``` to set the screen) as a ```.tsx``` file at the root. It can do anything you want it to; I currently have a screen to click a button, a screen to see clicker-related news, and a screen to see other people's clicks, so the screen you make just has to do something other than those things. It can be a screen to display a gif of a cat or something ig. Please add buttons to get from ```News```, ```HomeScreen```, and ```GlobalClicks``` to your new screen and vice versa. Those screens already have buttons to each other, so you can look at them as examples, and you can duplicate the ```News``` screen as a starting point. Also, please add a line in the ```View``` in ```App.tsx``` to display screen 4 if ```screen``` is 4. Thanks in advance!

Also, for dev purposes, comment out all of the code in getData of HomeScreen.tsx and just return a blank string so it doesn't throw an error, and comment out the supabase import. If there's anything related to a database, you can comment it out.


Run instructions:

Run the project with ```npx expo start``` and scan the QR code with your mobile device.


Database setup instructions (these are for me; you don't need to do this, just comment out everything requiring a database (supabase):

```
CREATE TABLE clicks_4261 (
    username VARCHAR(64),
    datetime TIMESTAMP
);
```
