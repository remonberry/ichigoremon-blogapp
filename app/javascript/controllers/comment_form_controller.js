import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["button", "form"]

    show() {
        this.buttonTarget.classList.add("hidden")
        this.formTarget.classList.remove("hidden")
    }

    submit(event) {
        event.preventDefault()

        const form = event.currentTarget

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        })
            .then(async response => {
                const data = await response.json()
                if (!response.ok) throw new Error(data.errors?.json(", ") || "投稿できませんでした")
                return data
            })
            .then(comment => {
                const item = document.createElement("div")
                item.className = "article_comment"

                const text = document.createElement("p")
                text.textContent = comment.content
                item.appendChild(text)

                document.querySelector(".comments-container").appendChild(item)
                form.reset()
            })
            .catch(error => window.alert(error.message))
    }
}