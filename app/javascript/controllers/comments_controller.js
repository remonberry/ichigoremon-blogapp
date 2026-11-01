import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = { articleId: Number }

    connect() {
        fetch(`/articles/${this.articleIdValue}/comments`, {
            headers: { "Accept": "application/json" }
        })
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    const item = document.createElement("div")
                    item.className = "article_comment"

                    const text = document.createElement("p")
                    text.textContent = comment.content

                    item.appendChild(text)
                    this.element.appendChild(item)
                })
            })
    }
}