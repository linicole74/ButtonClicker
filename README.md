To Peace:

Please look at the TODO in GlobalClicks.tsx. Also, if there's anything I missed commenting out that is related to a database that is breaking the code, you can comment it out.

Run instructions:

Run the project with ```npx expo start``` and scan the QR code with your mobile device.


Database setup instructions (these are for me; you don't need to do this, just comment out everything requiring a database (supabase):

```
CREATE TABLE clicks_4261 (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(64),
    datetime TIMESTAMP
);
```
