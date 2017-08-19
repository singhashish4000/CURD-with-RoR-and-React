# README

Steps necessary to get the
application up and running.

1. Install  ruby in your system

2. Clone or Download this repositiry 

3. Extract the Downloaded  Project and cd into the directory

4. Run Following Commands 
  
      1. rm -f db/*.sqlite3
      2. rake db:create
      3. RAILS_ENV=development rake db:migrate
      4. rails s -e development
      
5.The above commands will create the database and start the server

6.All Done

