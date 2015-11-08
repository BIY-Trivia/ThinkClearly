class Image < ActiveRecord::Base
  belongs_to :category

  has_attached_file :image, styles: { medium: "400x400>", thumb: "100x100>"}, default_url: "/assets/placeholder.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def options
    options = self.category.images
    options = options.inject([]){|arr,i| (i != self) ? arr.push(i) : arr}.sample(3)
    options.push(self)
    options
  end
end
