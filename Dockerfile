# Lightweight alpine OS, weight only 5mb, everything else is Go # # environment
FROM golang:1.9.2

# Setup environment variables
ENV GCS_BUCKET projectaround-post-images
ENV ES_URL http://35.236.55.210:9200

# Define working directory
WORKDIR /Study/USA_Graduate/WPI_Graduate_4/LaiOffer/Project_Around_v2

# Add files from your laptop to inside the docker image
ADD . /Study/USA_Graduate/WPI_Graduate_4/LaiOffer/Project_Around_v2

# Install dependencies
RUN go get -v \
cloud.google.com/go/bigtable \
cloud.google.com/go/storage \
github.com/auth0/go-jwt-middleware \
github.com/dgrijalva/jwt-go \
github.com/go-redis/redis \
github.com/gorilla/mux \
github.com/olivere/elastic \
github.com/pborman/uuid \
github.com/pkg/errors \
golang.org/x/oauth2/google

# Expose port
EXPOSE 8080

# Entrypoint
CMD ["/usr/local/go/bin/go", "run", "main.go" ]

