set -e

case $1 in
  prod) PREFIX=''
    ;;
     *) PREFIX='staging.'
    ;;
esac

BUCKET_URL="s3://$PREFIX"
BUCKET_URL+="2019.scala-italy.it"

yarn build

# upload everything but gzipped files
aws-vault exec buildo -- aws s3 sync build $BUCKET_URL --delete --acl public-read --region eu-central-1 --exclude "*.gz"
# upload gzipped files with correct content encoding
aws-vault exec buildo -- aws s3 sync build $BUCKET_URL --delete --acl public-read --region eu-central-1 --exclude "*" --include "*.gz" --content-encoding gzip
