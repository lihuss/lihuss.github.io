# frozen_string_literal: true

source "https://rubygems.org"

gemspec

group :test do
  gem "html-proofer", "~> 5.0"
end

group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-archives", "~> 2.2"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-include-cache", "~> 0.2"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]
