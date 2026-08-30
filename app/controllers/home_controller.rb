class HomeController < ApplicationController
    def index
 create-article-model
        @article = Article.first

        @title = 'デイトラ'

    end

    def about
    end
end