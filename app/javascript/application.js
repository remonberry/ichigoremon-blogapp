// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "trix"
import "@rails/actiontext"
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
    if (typeof gon === "undefined") return
    if (typeof gon.hasLiked === "undefined") return

    if (gon.hasLiked) {
        $('.active-heart').removeClass('hidden')
        $('.inactive-heart').addClass('hidden')
    } else {
        $('.inactive-heart').removeClass('hidden')
        $('.active-heart').addClass('hidden')
    }
})