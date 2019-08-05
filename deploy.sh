npm run build
gcloud config configurations activate travels
gcloud app deploy app.yaml --quiet --verbosity=warning --version=$(date +%Y%m%dt%H%M)
