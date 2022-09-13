# Express API with plugged Admin panel
Example project of building express API backed by postgress with sequelize, and plugged admin portal using [adminjs](https://www.npmjs.com/package/adminjs).

## Run
- `npm install`
- `npm run dev`
- `npm run dev-force-sync` on schema change(will drop your tables and recreate)
- `dev/seed` to seed some data 

## API endpoints
default host: `localhost:3000`

User endpoints:
- GET `/users`
- POST `/users`
  - shape: 
    ```json
    {
      "firstName": "<string>",
      "lastName": "<string>"
    }
    ```

Comment endpoints:
- GET `/users/:userId/comments`
- POST `/users/:userId/comments`
  - shape: 
    ```json
    {
      "text": "<string>",
      "upvotes": "<int>",
      "downvotes": "<int>",
    }
    ```
## Admin
Go to `localhost:3000/admin`