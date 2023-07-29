# web-forum

In this project, we will build the beginnings of a web forum! A forum is an online discussion board where users can exchange their opinions on a variety of topics. The most important component of a forum is the comment section. This is what we’ll work on in this project.

# Objective of this project
In building this application, you will sharpen your skills in React components by practicing using props as well as defining, rendering, and referencing components.

# How to go  about the project
There is a file named commentData.js which contains an array of comment objects with profileImg, username, and comment as its properties. Use this to populate the comments on the forum.

The comment section will be composed of Card components, which will be comprised of smaller Header and Body child components.

Next, App.js will contain the top-level component. The data in commentData.js will be retrieved in App.js and flow downward from App to Card to Header and Body.