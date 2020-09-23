class SubjectsController < ApplicationController
    def about
    end

    def show
    end

    def index 
    @subjects = Subject.all 
    end 
   
end
