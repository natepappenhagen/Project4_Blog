## Writers Blog - Summary
-Writers Blog is a full CRUD React and Django web app which allows users to create and comment on posts.

## WIREFRAMES AND USERS STORIES
-User Stories: User can create, edit, and delete a post.  A user can also create, edit and delete a comment tied to a post.  User has the ability to view all posts and all comments.  A user can comment on all posts.

## TECHNOLOGIES, APIS AND MODULES USED
-React
-React Router
-ReactStrap
-Django
-Django REST Framework
-PostgreSQL
-Heroku

## HOW TO ACCESS API ENDPOINTS:
-Two routes for each model - one for the list view and one for the single view.
  path('posts/', views.PostList.as_view(), name='post-list'),
  path('posts/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
  path('comments/', views.CommentList.as_view(), name='comment-list'),
  path('comments/<int:pk>/', views.CommentDetail.as_view(), name='comment-detail')

## INTENDED ADDED FEATURES:
-Create Users
-Users can view their own posts
-Users can upload images rather than link images
-Improve rerender performance 
-User profile 

## INSTRUCTIONS FOR DOWNLOADING THE CODE AND RUNNING ON LOCAL HOST:

-To access you can clone the React repo as well as Django at https://github.com/amandamolde/project-4-django
-To start React, first NPM install and then NPM start  
-The React app is hosted at http://localhost:3000/

To start Django, make sure you are in your virtual env, pip install all apps required in the requirements.TXT file, 
```
$ psql
> CREATE DATABASE <insert database name>;
> CREATE USER <insert username> WITH PASSWORD <'insert password'>;
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <username>;
> \q
$ python manage.py runserver
```


## IMAGE RESOURCES
-Overall Design
![overall_design](https://lh4.googleusercontent.com/LIH86zD35jhNDXw4Kh5mJmIhdHvrGRDEdRRz3lh9vK6TydNq4V4BMc_Tq75rtDF4m2uztd3mmsLpgyPL9PjA=w1290-h661-rw)
-API Routes
![API_Routing](https://lh5.googleusercontent.com/ZI40gRWNmuAmIfdDFl_JDHNBModdoQN04DkdJC_AIYS_f4TTj9Hr68JxZ83_hT4__FxOgWTVJgz_7ccWl877=w1290-h661-rw)
-Final Design Whiteboard
![FrontEndDesign](https://lh5.googleusercontent.com/SIOWEA8OUi8SdSOLk_G0a6oMVo2UJ5KC0ip-uiLQkLbXodr8wIE7jyQI4Ab4Mw0VufDQvsVDv9f49ID80LgS=w1290-h661-rw)
