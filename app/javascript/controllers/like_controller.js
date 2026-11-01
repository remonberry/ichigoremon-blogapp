import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = {
        articleId: Number,
        hasLiked: Boolean
    }

    connect() {
        this.showHeart()
    }

    toggle() {
        const method = this.hasLikedValue ? "DELETE" : "POST"
        const url = `/articles/${this.articleIdValue}/like`

        fetch(url, {
            method,
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')?.content,
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.hasLikedValue = data.hasLiked
                this.showHeart()
            })
    }

    showHeart() {
        const activeHeart = this.element.querySelector(".active-heart")
        const inactiveHeart = this.element.querySelector(".inactive-heart")

        activeHeart?.classList.toggle("hidden", !this.hasLikedValue)
        inactiveHeart?.classList.toggle("hidden", this.hasLikedValue)
    }
}