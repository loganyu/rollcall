@event_comments.each do |event_comment|
  json.set! event_comment.id do
    json.partial! 'event_comment', event_comment: event_comment
  end
end
