json.event_comment do
  json.partial! '/api/events/event_comment', event_comment: @event_comment
end
