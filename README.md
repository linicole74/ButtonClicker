To partner:

Please look at the TODO in GlobalClicks.tsx. Also, for dev purposes, comment out all of the code in getData of HomeScreen.tsx and just return a blank string so it doesn't throw an error, and comment out the supabase import.


Database setup:

```
CREATE TABLE clicks_4261 (
    username VARCHAR(64),
    datetime TIMESTAMP
);
```

Run the project with ```npx expo start``` and scan the QR code with your mobile device.
