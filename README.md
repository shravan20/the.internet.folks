<p align="center">
  <img align="center" width="20%" src="assets/tiflogo.png" alt="logo"/>
  <h5 align="center">The Internet Folks: An Restful Service</h5>
</p>

---

#### About

You run a SaaS Platform that enables user to make their communities and add members to it.
Each user, can create a community and (automatically) gets assigned the Community Admin role. They can add other users to the community who get assigned the Community Member role.

#### User Stories (Features)

- Module: Authentication
  - Feature: User should be able to signup using valid name, email and strong password.
  - Feature: User should be able to signin using valid credentials.
- Module: Community
  - Feature: User should be able to see all communities.
  - Feature: User should be able to create a community.
- Module: Moderation
  - Feature: User should be able to see all community members.
  - Feature: User should be able to add a user as member.
  - Feature: User should be able to remove a member from community.

#### Problem Statement

- You need to build the APIs that adheres to above user stories.
- The Role names are strict.
- The API URLs and Response Structure is fixed.
- The field attributes and table names are strict as well.
- Addition of field for storing IDs when using NoSQL is allowed.
- Validations for each API must be carried out.

Others:

- [Refer to postman collections](assets/TIF.postman_collection.json)
- How to start the service: `npm start` : runs on port 4000.
- Do we need env file?
  - Yes, Create .env file with all key values provided in .env.sample file:
    - APP_PORT=4000 => PORT NO on which you want the server to run on
    - DB_URI="mongodb+srv://x:x@x.y.z.net/tif" => MONGODB Url
    - JWT_SECRET=some_secret => JWT Secret anything that you want (P.S: With great secret comes great power)
