# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_21_180524) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_clubs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "club_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_admin_clubs_on_club_id"
    t.index ["user_id", "club_id"], name: "index_admin_clubs_on_user_id_and_club_id", unique: true
    t.index ["user_id"], name: "index_admin_clubs_on_user_id"
  end

  create_table "clubs", force: :cascade do |t|
    t.string "name", null: false
    t.string "city", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "deleted", default: false
    t.integer "owner_id"
    t.index ["owner_id"], name: "index_clubs_on_owner_id"
  end

  create_table "event_comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "event_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "deleted", default: false
    t.index ["event_id"], name: "index_event_comments_on_event_id"
    t.index ["user_id"], name: "index_event_comments_on_user_id"
  end

  create_table "event_follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_follows_on_event_id"
    t.index ["user_id", "event_id"], name: "index_event_follows_on_user_id_and_event_id", unique: true
    t.index ["user_id"], name: "index_event_follows_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.text "schedule"
    t.boolean "beginners_welcome"
    t.string "workout_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "club_id"
    t.boolean "deleted", default: false
    t.string "address"
    t.index ["club_id"], name: "index_events_on_club_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "member_clubs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "club_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_member_clubs_on_club_id"
    t.index ["user_id", "club_id"], name: "index_member_clubs_on_user_id_and_club_id", unique: true
    t.index ["user_id"], name: "index_member_clubs_on_user_id"
  end

  create_table "members_clubs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "club_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["club_id"], name: "index_members_clubs_on_club_id"
    t.index ["user_id", "club_id"], name: "index_members_clubs_on_user_id_and_club_id", unique: true
    t.index ["user_id"], name: "index_members_clubs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "email"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
