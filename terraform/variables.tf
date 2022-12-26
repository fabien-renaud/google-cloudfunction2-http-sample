variable "project" {
  type        = string
  description = "(Required) The project ID"
}

variable "location" {
  type        = string
  description = "(Optional) Region of function"
  default     = "europe-west1"
}

variable "function_name" {
  type        = string
  description = "(Optional) A user-defined name of the function. Function names must be unique globally"
  default     = "cloudfunction-http-sample"
}

variable "function_description" {
  type        = string
  description = "(Optional) Description of the function"
  default     = "cloudfunction-http-sample"
}

variable "entrypoint" {
  type        = string
  description = "(Optional) Name of a JavaScript function that will be executed when the Google Cloud Function is triggered"
  default     = "server"
}
