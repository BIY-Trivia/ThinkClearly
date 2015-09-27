class Image < ActiveRecord::Base
  belongs_to :category

  has_attached_file :image, styles: { medium: "400x400>", thumb: "100x100>"}, default_url: "/assets/placeholder.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
