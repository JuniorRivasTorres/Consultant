class SubjectsController < ApplicationController
    def about
    end

    def show
        @subject = Subject.find(params[:id])
    end

    def index 
        if params[:query].present?
            @subjects = Subject.search_by_subject(params[:query])
        else 
            @subjects = Subject.all    
        end
        
    end 
end
