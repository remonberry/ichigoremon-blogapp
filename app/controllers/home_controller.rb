class HomeController < ApplicationController
    def index
        @article = Article.first

        @title = 'デイトラ'

    end

    def about
    end
end