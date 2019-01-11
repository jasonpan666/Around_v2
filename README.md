# Around_v2
Geo-index based social network <br />

•Built a scalable web service in Go to handle posts and deployed to Google Cloud (GAE flex) for better scaling <br />
•Utilized ElasticSearch (GCE) to provide geo-location based search functions such that users can search nearby posts within a distance (e.g. 200km) <br />
•Used Google Dataflow to implement a daily dump of posts to BigQuery table for offline analysis <br />
•Aggregated the data at the post level and user level to improve the keyword based spam detection (BigQuery) <br />
