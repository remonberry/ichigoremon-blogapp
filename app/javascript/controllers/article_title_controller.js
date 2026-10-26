import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="article-title"
export default class extends Controller {
  connect() {
    window.alert("DOM LOADED")

    this.element.addEventListener("click", () => {
      window.alert("CLICKED")
    })
  }
}
