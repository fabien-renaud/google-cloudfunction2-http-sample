module "cloudfunction" {
  source      = "github.com/fabien-renaud/google-cloudfunction2"
  name        = "cloudfunction2-http-sample"
  project     = "fabienrenaud"
  location    = "europe-west1"
  description = "Sample CloudFunction HTTP in JavaScript deployed with Terraform"
  account_id  = "cloudfunction2-sa"
  entrypoint  = "server"
  is_public   = true
  source_dir  = "../build/google-cloudfunction2-http-sample"
  output_path = "../build"
}
