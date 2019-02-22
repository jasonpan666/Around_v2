# Around_v2
Cloud and Geo-index based Social Network <br />

*Frontend* <br />
•Built a geo-based social network using React where users can post images and videos with comments and locations on map <br />
•Implemented basic token based registration/login/logout flow with React Router v4 and server-side user authentication with JWT <br />
•Implemented "Create New Post", "Posts Around Me", "Posts In Map" with Ant Design, GeoLocation API, Google Map API <br />
•Utilized Facial Recognition API and displayed all images with faces in "Faces Around The World" feature <br />
<br />
*Backend* <br />
•Built a scalable backend web service in Go to handle posts and deployed to Google Cloud (GAE flex) for better scaling <br />
•Utilized ElasticSearch (GCE) to provide geo-location based search functions such that users can search nearby posts within a distance <br />
•Used Google Dataflow to implement a daily dump of posts to BigQuery table for offline analysis <br />
•Aggregated the data at the post level and user level to improve the keyword based spam detection (BigQuery) <br />
•Used Google Cloud Machine Learning API and TensorFlow to train a face detection model and integrated with Go service <br />
