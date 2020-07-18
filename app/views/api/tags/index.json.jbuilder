json.tags do
    @tags.each do |tag|
        json.extract! :tag_name
    end
end