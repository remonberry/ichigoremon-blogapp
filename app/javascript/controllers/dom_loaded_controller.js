import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dom-loaded"
export default class extends Controller {
  connect() {
    window.alert("DOM LOADED")
  }
}
