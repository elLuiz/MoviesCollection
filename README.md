# MoviesCollection

Website to manage movies that you have watched. 

## Stack 
 * ReactJS
 * MongoDB
 * NodeJS  
## Dependencies

All dependencies for the server are available in package.json file, and for the client(ui) in the client folder as well. 
  #### How to install all dependencies?
    In order to install the dependencies used in this website, type in your terminal npm install package.json
   
## How to use it?
1. You can either create a free [Atlas Cluster](https://www.mongodb.com/cloud/atlas) or use the localhost version of MongoDB.
2. Create a file, in the root, named .env (this may disappear in your directory; i recommend you to use VsCode or another text editor). In that file put the informations about your database, following this syntax:mongodb+srv://<Mongousername>:<password>@<clusterName>.huhwl.mongodb.net/<dbname>?retryWrites=true&w=majority 
3. Now, run this command in terminal: npm run dev. This command will execute server and client at the same time.

## Screenshots

![Main](./Images/capture1.png)
![Add](./Images/capture2.png)
![Information](./Images/capture3.png)
![Search](./Images/capture4.png)

